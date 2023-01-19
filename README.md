# Donut Shop

## Summary

A home page for a mock donut shop made using NextJS.
A PocketBase backend hosted on fly.io holds all the JSON data for the website. Cloudinary stored all the images.
Images were either collected from the public domain, or created using MidJourney.
Here is the [Live Demo](https://donut-shop-ca.vercel.app/).

## Layout

CSS grid is the primary method of layout.
A 12-column layout is used to position and size elements responsively.
Other elements use flexbox to position their child elements. 

## NavBar hover effect 

Restricts a gradient ``background-image`` to appear only on the text by using ``background-clip``.
The text ``color`` is set to transparent to make the gradient visible.
The linear gradient fills up the text with the new color.
The ``background-position`` is animated, creating the effect.
Once the animation is over, the ``color`` is set to its new value.



## Media Queries

Most components use media queries to be responsive.
Some examples of the changes made on differing screen sizes are:
- Change the number of columns an element takes up
- Make elements wrap
- Remove unnecessary elements
- Change the order of elements
- And more.


## Hero Carousel

Uses React useEffect to change the selected image after a ``setTimeout``.
Since the timeout causes the component to rerender, ``setTimeout`` is called again, removing the need for ``setInterval``.
The timeout gets cleared when the image is manually changed as well.

## Add To Cart Button

The price is absolutely positioned and gets assigned ``display: none`` on hover.
'Add to Cart' is initially transparent and becomes visible on hover.
The text keeps the button width constant without needing to set it explicitly.

## InfiniteSlider

This is a scrolling effect that cycles through images infinitely.
This effect is achieved by translating the container of the images horizontally and resetting their position once off-screen.
The container begins off-screen. With a negative ``animation-delay`` the animation can start when the container is visible.
The container and its contents are duplicated and given a different ``animation-delay`` to make it appear infinite. 
Below is a gif that shows the cycle with two images.
Images in the first group have blue outlines.
Images in the identical second group have red outlines.

![](https://res.cloudinary.com/dgnrqyibk/image/upload/v1673542393/donut-shop/readme/ofuazf61qxrjmw05ryqq.gif)