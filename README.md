# responsive-nav

responsive-nav is a stand-alone vanilla JS web component that does not use shadow DOM. The component wraps a button element and focusable elements that adds accessibility features.

Live demo available here.

## Features


## Attributes

Currently component has only one custom attribute that can be assigned a value in the HTML tag:

Name               |Type     |Description                                      |Default value
-------------------|---------|-------------------------------------------------|--------------
data-onclick-class |String   |Class that is added or removed by onclick event  |None

Usage example:

   ```html
    <responsive-nav data-onclick-class="responsive" class="test">
        <nav> 
            <button> 
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
                    <path fill="#5f6368" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
            </button> 
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </responsive-nav>
   ```
