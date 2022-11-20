/*!
 * ysslider - Free, simple and responsive slider plugin.
 * Author: Yusuf SEZER <yusufsezer@mail.com>
 * Version: v1.0.0
 * Url: https://github.com/yusufsefasezer/ysSlider.js
 * License: MIT
 */

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], function () {
			return factory(root);
		});
	} else if (typeof exports === 'object') {
		module.exports = factory(root);
	} else {
		root.ysSlider = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	//
	// Shared Variables
	//

	var defaults = {
		// Selectors
		wrapper: '.ysslider',
		itemClass: '.item',

		// Animate
		animate: false,

		// Auto
		auto: false,
		pause: 2000,

		// Controls
		controls: true,
		controlBar: '.controlbar',

		// Touch
		touch: false
	};

	//
	// Shared Methods
	//

    /**
	 * Check if browser supports required methods.
     * @private
	 * @return {Boolean} Returns true if all required methods are supported.
	 */
	var supports = function () {
		return (
			'querySelector' in document &&
			'addEventListener' in window &&
			'classList' in document.createElement('div')
		);
	};

    /**
	 * Check `obj` is a HTMLElement.
     * @private
     * @param {Object} obj The obj to check.
	 * @returns {Boolean} Returns `true` if `obj` is a HTMLElement, else `false`.
	 */
	var isElement = function (obj) {
		return obj instanceof HTMLElement;
	};

    /**
     * Merge two or more objects. Returns a new object.
     * @private
     * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
     * @param {Object}   objects  The objects to merge together
     * @returns {Object}          Merged values of defaults and options
     */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Check if a deep merge
		if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for (var prop in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, prop)) {
					// If deep merge and property is an object, merge properties
					if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
						extended[prop] = extend(true, extended[prop], obj[prop]);
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for (; i < length; i++) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	//
	// Plugin Constructor
	//

    /** 
     * Plugin Object
     * @param {Object} opts User settings
     * @constructor
     */
	var Plugin = function (opts) {

		//
		// Plugin Variables
		//

		var publicAPIs = {};
		var settings = null;
		var slideItems = null;
		var currentSlide = 0;
		var interval = null;
		var touchstartX = 0;
		var touchendX = 0;

		//
		// Plugin Methods
		//

        /**
         * Initialize Plugin.
         * @public
         * @param {Object} options User settings
         */
		publicAPIs.init = function (options) {

			// Feature test
			if (!supports()) throw 'ysSlider: This browser does not support the required JavaScript methods and browser APIs.'

			// Destroy any existing initializations
			publicAPIs.destroy();

			// Merge options into defaults
			settings = extend(defaults, options || {});

			// Select wrapper
			settings.wrapper = (typeof settings.wrapper === 'string') ? document.querySelector(settings.wrapper) : settings.wrapper;

			// Check if a valid element
			if (!isElement(settings.wrapper)) throw new TypeError('ysSlider: Please select a valid slider wrapper.');

			// Add wrapper style
			settings.wrapper.classList.add('ysslider');

			// Select the slides in the slider.
			slideItems = settings.wrapper.querySelectorAll(settings.itemClass);

			// Check if slide controls active
			if (settings.controls === true) {

				// Select controlBar
				settings.controlBar = (typeof settings.controlBar === 'string') ? document.querySelector(settings.controlBar) : settings.controlBar;

				// Check if a valid element
				if (!isElement(settings.controlBar)) throw new TypeError('ysSlider: Please select a valid slider control element.');
				settings.controlBar.classList.add('yscontrolbar');
			}

			// Check if animate active
			if (settings.animate === true) {
				for (var i = 0; i < slideItems.length; i++) {
					slideItems[i].classList.add('animated');
				}
			}

			// Check if auto slide active
			if (settings.auto === true) {

				startAuto();
				settings.wrapper.addEventListener('mouseenter', stopAuto, false);
				settings.wrapper.addEventListener('mouseleave', startAuto, false);

			};

			// Check if touch active
			if (settings.touch === true) {

				settings.wrapper.addEventListener('touchstart', onTouchStart, false);
				settings.wrapper.addEventListener('touchend', onTouchEnd, false);

			}

			// Show current slide
			publicAPIs.show(currentSlide);

		};

		/**
		 * Show slide to the slideIndex.
		 * @public
		 * @param {Number} slideIndex the destination slide's index (zero-based)
		 */
		publicAPIs.show = function (slideIndex) {

			currentSlide = slideIndex;

			// if currentSlide is greater than slideItems length, set currentSlide to first slide
			if (currentSlide >= slideItems.length) currentSlide = 0;

			// if currentSlide is less than zero, set currentSlide to last slide
			if (currentSlide < 0) currentSlide = slideItems.length - 1;

			// Hide all slides
			for (var i = 0; i < slideItems.length; i++) {
				slideItems[i].style.display = 'none';
			}

			// Show current slide
			slideItems[currentSlide].style.display = 'block';
		};

		/**
		 * Go to the next slide.
		 * @public
		 */
		publicAPIs.next = function () {
			publicAPIs.show(++currentSlide);
		};

		/**
		 * Go to the prev slide.
		 * @public
		 */
		publicAPIs.prev = function () {
			publicAPIs.show(--currentSlide);
		};

		/**
		 * Returns current slide index.
		 * @public
		 */
		publicAPIs.getCurrentSlide = function () {
			return currentSlide;
		};

		/**
		 * Returns number of slides.
		 * @public
		 */
		publicAPIs.getSlideCount = function () {
			return slideItems.length;
		};

		/**
		 * Destroy the current initialization.
		 * @public
		 */
		publicAPIs.destroy = function () {

			// if plugin isn't already initialized, stop
			if (!settings) return;

			// Remove event listeners
			settings.wrapper.removeEventListener('mouseenter', stopAuto, false);
			settings.wrapper.removeEventListener('mouseleave', startAuto, false);
			settings.wrapper.removeEventListener('touchstart', onTouchStart, false);
			settings.wrapper.removeEventListener('touchend', onTouchEnd, false);

			// Reset variables
			settings = null;
			slideItems = null;
			currentSlide = 0;
			stopAuto();
			touchstartX = 0;
			touchendX = 0;

		};

        /**
		 * Event handler for "touchstart".
         * @private
		 * @param {event} event DOM event object
         */
		var onTouchStart = function (event) {

			stopAuto();

			touchstartX = event.changedTouches[0].screenX;

		};

        /**
		 * Event handler for "touchend".
         * @private
		 * @param {event} event DOM event object
         */
		var onTouchEnd = function (event) {

			touchendX = event.changedTouches[0].screenX;

			// Check if swiped to left
			if (touchendX < touchstartX) publicAPIs.next();

			// Check if swiped to right
			if (touchendX > touchstartX) publicAPIs.prev();

			// Check if auto slide active
			if (settings.auto === true) startAuto();

		};

		/**
		 * Starts the auto show.
		 * @private
		 */
		var startAuto = function () {

			// if an interval already exists, disregard call
			if (interval) return;

			// create an interval
			interval = setInterval(function () {
				publicAPIs.next();
			}, settings.pause);

		};

		/**
		 * Stops the auto show.
		 * @private
		 */
		var stopAuto = function () {

			// if no interval exists, disregard call
			if (!interval) return;

			// clear the interval
			clearInterval(interval);
			interval = null;

		};

		//
		// Initialize plugin
		//

		publicAPIs.init(opts);

		//
		// Return the public APIs
		//

		return publicAPIs;

	};

	//
	// Return the Plugin
	//

	return Plugin;

});