"use strict";

export class ResponsiveNav extends HTMLElement {
    static get observedAttributes() { return ["class"]; }  
    
    constructor() {
        super();
        this.method = this.createElement(this);
        console.log(`constructor`)
    }

    connectedCallback() {
        console.log(`connectedCallback`);
    }

    attributeChangedCallback() {
        console.log(`attributeChangedCallback`)
        this.method.addOrRemoveAccessibilityKeyboardEvents();
        
    }

    createElement = function(element) {
        const customElement = element;
        const button = customElement.querySelector("button");
        const focusableElements = customElement.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
      
        const updateButtonAriaExpandedAttribute = function() {
            if (button.getAttribute("aria-expanded") === "false") {
                button.setAttribute("aria-expanded", "true");
            }                                           
            else {
                button.setAttribute("aria-expanded", "false");
            }
        }
      
        const updateCustomElementClassList = function() {
            if(button.getAttribute("aria-expanded") === "true") {
                customElement.classList.add( customElement.getAttribute("data-onclick-class") );   
            }
            else {
                customElement.classList.remove( customElement.getAttribute("data-onclick-class") );
            }
        }
      
        const updateAttributes = function() {
            updateButtonAriaExpandedAttribute();
            updateCustomElementClassList();
        }
      
        const escapeEvent = function(e) {
            if(e.key === "Escape") {
                updateButtonAriaExpandedAttribute();
                updateCustomElementClassList();
                button.focus();
            }
        }
      
        const firstFocusableElementToLastFocusableElement = function(e) {
            if(e.key === 'Tab' && e.shiftKey) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
        }   
      
        const lastFocusableElementToFirstFocusableElement = function(e) {
            if(e.key === 'Tab' && !e.shiftKey) {   
                e.preventDefault();
                firstFocusableElement.focus();
            }
        }
      
        const addOrRemoveAccessibilityKeyboardEvents = function() {
            if(button.getAttribute("aria-expanded") === "true") {
                customElement.addEventListener("keydown", escapeEvent);
                firstFocusableElement.addEventListener("keydown", firstFocusableElementToLastFocusableElement);
                lastFocusableElement.addEventListener("keydown", lastFocusableElementToFirstFocusableElement);
            }   
            else {
                customElement.removeEventListener("keydown", escapeEvent);
                firstFocusableElement.removeEventListener("keydown", firstFocusableElementToLastFocusableElement);
                lastFocusableElement.removeEventListener("keydown", lastFocusableElementToFirstFocusableElement);
            }
        }
      
        button.setAttribute("aria-expanded", "false");
        button.addEventListener("click", updateAttributes);
      
        return Object.freeze({
            addOrRemoveAccessibilityKeyboardEvents
        });
    } 
}