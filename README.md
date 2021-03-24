## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

HTML
1) Body
    - intro/general content
    - an image
    - 3 sections
    - headers
    - unordered list
        - ```<ul> <li>```
    - ordered list
        - ```<ol> <li>```
    - play button
        - ```<button>```
    - quiz results
        - ```<div>```
2) TDD
    - connect utils.js to utils.test.js
        - import
    - create test for isYes function
        - expected, actual
    - create isYes function in utils.js
        - function
    - check to see all tests pass
3) JS
    - connect app.js to html
        - <script></script>
    - reference DOM elements
        -validate
    - button function
        - addEventListener on click
            - initial message
                - alert
                -validate
            - name 
                - prompt
                - validate
            - do you want to play?
                - confirm
                - validate
            - 3 questions
                - prompt
                - validate
            - score
                -textContent
                - validate




