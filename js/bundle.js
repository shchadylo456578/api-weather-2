/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uc2Nzcz8wYWEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/main.scss\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n\nfunction getJSON(url, callback) {\n  var xhr = new XMLHttpRequest();\n  xhr.open(\"GET\", url, true);\n  xhr.onload = function (e) {\n    if (xhr.readyState === 4) {\n      if (xhr.status === 200) {\n        var res = xhr.responseText;\n        callback(JSON.parse(res));\n      } else {\n        console.error(xhr.statusText);\n      }\n    }\n  };\n  xhr.onerror = function (e) {\n    console.error(xhr.statusText);\n  };\n  xhr.send(null);\n}\n\nvar weather = void 0;\nvar input = document.getElementById('city');\nvar api = 'https://api.openweathermap.org/data/2.5/find?q=';\nvar units = '&units=metric';\nvar apiKey = '&APPID=68fd7cea66f7e82809cdf13613ac7ee1';\n\nfunction setup() {\n\n  var button = document.querySelector('#search-city');\n\n  button.addEventListener('click', function () {\n    var nameCity = input.value;\n\n    var url = api + nameCity + apiKey + units;\n\n    getJSON(url, gotData);\n  });\n}\n\nsetup();\n\nfunction gotData(data) {\n  // console.log(data);\n  weather = data;\n  // draw();\n  outputInputData();\n}\n\nfunction outputInputData() {\n\n  if (weather) {\n    var tempOut = document.querySelector(\"#temp\");\n    var humOut = document.querySelector(\"#hum\");\n\n    var temp = weather.list[0].main.temp;\n    var humidity = weather.list[0].main.humidity;\n\n    tempOut.innerHTML = Math.floor(temp);\n    humOut.innerHTML = Math.floor(humidity);\n  }\n}\n\n// function draw() {\n//   let canvas = document.querySelector(\"#show-weather\");\n//\n//   if (weather) {\n//\n//     let temp = weather.list[0].main.temp;\n//     let humidity = weather.list[0].main.humidity;\n//     let ctx = canvas.getContext(\"2d\");\n//\n//     ctx.arc(75, 75, humidity, 0, Math.PI * 2, true);\n//     ctx.fill();\n//\n//\n//\n//     ctx.arc(225, 75, temp, 0, Math.PI * 2, true);\n//     ctx.fill();\n//\n//   }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbmxvYWQiLCJlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlcyIsInJlc3BvbnNlVGV4dCIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2VuZCIsIndlYXRoZXIiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcGkiLCJ1bml0cyIsImFwaUtleSIsInNldHVwIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYW1lQ2l0eSIsInZhbHVlIiwiZ290RGF0YSIsImRhdGEiLCJvdXRwdXRJbnB1dERhdGEiLCJ0ZW1wT3V0IiwiaHVtT3V0IiwidGVtcCIsImxpc3QiLCJtYWluIiwiaHVtaWRpdHkiLCJpbm5lckhUTUwiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBR0EsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLFFBQXRCLEVBQWdDO0FBQzlCLE1BQUlDLE1BQU0sSUFBSUMsY0FBSixFQUFWO0FBQ0FELE1BQUlFLElBQUosQ0FBUyxLQUFULEVBQWdCSixHQUFoQixFQUFxQixJQUFyQjtBQUNBRSxNQUFJRyxNQUFKLEdBQWEsVUFBVUMsQ0FBVixFQUFhO0FBQ3hCLFFBQUlKLElBQUlLLFVBQUosS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsVUFBSUwsSUFBSU0sTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCLFlBQUlDLE1BQU1QLElBQUlRLFlBQWQ7QUFDQVQsaUJBQVNVLEtBQUtDLEtBQUwsQ0FBV0gsR0FBWCxDQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0xJLGdCQUFRQyxLQUFSLENBQWNaLElBQUlhLFVBQWxCO0FBQ0Q7QUFDRjtBQUNGLEdBVEQ7QUFVQWIsTUFBSWMsT0FBSixHQUFjLFVBQVVWLENBQVYsRUFBYTtBQUN6Qk8sWUFBUUMsS0FBUixDQUFjWixJQUFJYSxVQUFsQjtBQUNELEdBRkQ7QUFHQWIsTUFBSWUsSUFBSixDQUFTLElBQVQ7QUFDRDs7QUFHRCxJQUFJQyxnQkFBSjtBQUNBLElBQUlDLFFBQVFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWjtBQUNBLElBQUlDLE1BQU0saURBQVY7QUFDQSxJQUFJQyxRQUFRLGVBQVo7QUFDQSxJQUFJQyxTQUFTLHlDQUFiOztBQUdBLFNBQVNDLEtBQVQsR0FBaUI7O0FBRWYsTUFBSUMsU0FBU04sU0FBU08sYUFBVCxDQUF1QixjQUF2QixDQUFiOztBQUdBRCxTQUFPRSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO0FBQ3JDLFFBQUlDLFdBQVdWLE1BQU1XLEtBQXJCOztBQUVBLFFBQUk5QixNQUFNc0IsTUFBTU8sUUFBTixHQUFpQkwsTUFBakIsR0FBMEJELEtBQXBDOztBQUVBeEIsWUFBUUMsR0FBUixFQUFhK0IsT0FBYjtBQUNELEdBTkQ7QUFRRDs7QUFFRE47O0FBRUEsU0FBU00sT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDckI7QUFDQWQsWUFBVWMsSUFBVjtBQUNBO0FBQ0FDO0FBQ0Q7O0FBR0QsU0FBU0EsZUFBVCxHQUEyQjs7QUFFekIsTUFBR2YsT0FBSCxFQUFXO0FBQ1QsUUFBSWdCLFVBQVVkLFNBQVNPLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBLFFBQUlRLFNBQVNmLFNBQVNPLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxRQUFJUyxPQUFPbEIsUUFBUW1CLElBQVIsQ0FBYSxDQUFiLEVBQWdCQyxJQUFoQixDQUFxQkYsSUFBaEM7QUFDQSxRQUFJRyxXQUFXckIsUUFBUW1CLElBQVIsQ0FBYSxDQUFiLEVBQWdCQyxJQUFoQixDQUFxQkMsUUFBcEM7O0FBR0FMLFlBQVFNLFNBQVIsR0FBb0JDLEtBQUtDLEtBQUwsQ0FBV04sSUFBWCxDQUFwQjtBQUNBRCxXQUFPSyxTQUFQLEdBQW1CQyxLQUFLQyxLQUFMLENBQVdILFFBQVgsQ0FBbkI7QUFFRDtBQUVGOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jc3MvbWFpbi5zY3NzJztcblxuXG5mdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcbiAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgbGV0IHJlcyA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKHhoci5zdGF0dXNUZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKHhoci5zdGF0dXNUZXh0KTtcbiAgfTtcbiAgeGhyLnNlbmQobnVsbCk7XG59XG5cblxubGV0IHdlYXRoZXI7XG5sZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xubGV0IGFwaSA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZmluZD9xPSc7XG5sZXQgdW5pdHMgPSAnJnVuaXRzPW1ldHJpYyc7XG5sZXQgYXBpS2V5ID0gJyZBUFBJRD02OGZkN2NlYTY2ZjdlODI4MDljZGYxMzYxM2FjN2VlMSc7XG5cblxuZnVuY3Rpb24gc2V0dXAoKSB7XG5cbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtY2l0eScpO1xuXG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBuYW1lQ2l0eSA9IGlucHV0LnZhbHVlO1xuXG4gICAgbGV0IHVybCA9IGFwaSArIG5hbWVDaXR5ICsgYXBpS2V5ICsgdW5pdHM7XG5cbiAgICBnZXRKU09OKHVybCwgZ290RGF0YSlcbiAgfSk7XG5cbn1cblxuc2V0dXAoKTtcblxuZnVuY3Rpb24gZ290RGF0YShkYXRhKSB7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICB3ZWF0aGVyID0gZGF0YTtcbiAgLy8gZHJhdygpO1xuICBvdXRwdXRJbnB1dERhdGEoKVxufVxuXG5cbmZ1bmN0aW9uIG91dHB1dElucHV0RGF0YSgpIHtcblxuICBpZih3ZWF0aGVyKXtcbiAgICBsZXQgdGVtcE91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcFwiKTtcbiAgICBsZXQgaHVtT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodW1cIik7XG5cbiAgICBsZXQgdGVtcCA9IHdlYXRoZXIubGlzdFswXS5tYWluLnRlbXA7XG4gICAgbGV0IGh1bWlkaXR5ID0gd2VhdGhlci5saXN0WzBdLm1haW4uaHVtaWRpdHk7XG5cblxuICAgIHRlbXBPdXQuaW5uZXJIVE1MID0gTWF0aC5mbG9vcih0ZW1wKTtcbiAgICBodW1PdXQuaW5uZXJIVE1MID0gTWF0aC5mbG9vcihodW1pZGl0eSk7XG5cbiAgfVxuXG59XG5cbi8vIGZ1bmN0aW9uIGRyYXcoKSB7XG4vLyAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3ctd2VhdGhlclwiKTtcbi8vXG4vLyAgIGlmICh3ZWF0aGVyKSB7XG4vL1xuLy8gICAgIGxldCB0ZW1wID0gd2VhdGhlci5saXN0WzBdLm1haW4udGVtcDtcbi8vICAgICBsZXQgaHVtaWRpdHkgPSB3ZWF0aGVyLmxpc3RbMF0ubWFpbi5odW1pZGl0eTtcbi8vICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbi8vXG4vLyAgICAgY3R4LmFyYyg3NSwgNzUsIGh1bWlkaXR5LCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4vLyAgICAgY3R4LmZpbGwoKTtcbi8vXG4vL1xuLy9cbi8vICAgICBjdHguYXJjKDIyNSwgNzUsIHRlbXAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbi8vICAgICBjdHguZmlsbCgpO1xuLy9cbi8vICAgfVxuLy8gfVxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });