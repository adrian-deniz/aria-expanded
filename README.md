# responsive-nav

responsive-nav is a stand-alone vanilla JS web component that does not use shadow DOM. The component wraps a button element and focusable elements that adds accessibility features.

Live demo available here.

## Features


## Attributes

Currently component has only one custom attribute that can be assigned a value in the HTML tag:

Name               |Type     |Description                             |Default value
-------------------|---------|----------------------------------------|--------------
data-onclick-class |  String | Class that is added or removed onclick | None


Following component attributes are boolean attributes, also known as valueless attributes. The presence of a boolean attribute in the HTML tag represents the true value, and the absence of the attribute represents the false value:

Name   | Description | if attribute is defined | If attribute is not defined
-------|-------------|-------------------------|----------------------------
ignore-on-focus | Calendar appearance after the input element gets focus| Calendar won't appear| Calendar appears
sunday-first | First day of the calendar week | Sunday is first | Monday is first
persist-on-select | Calendar visibility after the date has been selected | Calendar won't disappear | Calendar disappears
show-close-icon | Calendar close icon visibility | Icon is visible | Icon is hidden

Usage examples:

   ```html
    <wc-datepicker init-date='28.12.2005' sunday-first>
      <input type='text'>
    </wc-datepicker>
   ```

   ```html
    <wc-datepicker init-date='current' persist-on-select>
      <input type='text'>
    </wc-datepicker>
   ```

