jqDebug.js
==========

jqDebug.js is a tiny jquery function that will helps you to debug your projects. 

## Usage
To use the jqDebug.js, you have to follow these steps : 

###Load jQuery on your website</span>
Right before the closing `</body>` tag, add :
`<script type="text/javascript" src="path/to/jquery.min.js"></script>`

###Load jqDebug.js right after jquery</span>
Then, after the jquery inclusion, add :
`<script type="text/javascript" src="path/to/jqdebug.min.js"></script>`

###Specify wich HTML elements needs debugging</span>
Now, go to your HTML document, and specify which elements needs a debug, proceed like the following: 
````html
<div class="my-awesome-div" data-debug="red">...</div>
<a class="my-awesome-link" data-debug="blue">...</a>
<img src="path/to/my/image.png" alt="An awesome image" data-debug="green"/>
````

        
This will specify to the function, which color to add to the debug process for this item.

### Launch the debugging function</span>
And now, just define the kind of debugging you want to see. 

There is few different choices : 

| Type  | Call it  | Effect |
| :------------ |:---------------:| -----:|
| color      | `debug('color')` | Will color the content (text) inside of your elements.  |
| background      | `debug('background')` | Will color the background of your elements.  |
| border      | `debug('border')`     | Will generate & color the border around your elements.  |
| box-shadow | `debug('box-shadow')`    | Will generate & color the box-shadow around your elements. |


Now, right after the jqDebug script tag inclusion, just add an other script tag, specifying which kind of debug you want. 
```html
<script type="text/javascript" src="path/to/jquery.min.js"></script>
<script type="text/javascript" src="path/to/jqdebug.min.js"></script>
<script type="text/javascript">
  debug('background');
</script>
```


### Now 
If you have any questions, suggestions, ideas. 
Feel free to open issues, or to send me a tweet (@LukyVj)

