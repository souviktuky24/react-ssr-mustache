import React from 'react';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';

function SimpleTextComponent() {
  return (
    <>
    <div>
        <div>
         <p>Use "renderToStaticMarkup" method -</p>
        </div>
        <div>
        Similar to renderToString, except this doesn't create extra DOM attributes that React uses internally, such as data-reactroot. This is useful if you want to use React as a simple static page generator, as stripping away the extra attributes can save some bytes.

        If you plan to use React on the client to make the markup interactive, do not use this method. Instead, use renderToString on the server and ReactDOM.hydrateRoot() on the client.
        </div>
    </div>
    <div>

    <div>
         <p>Use "renderToString" method -</p>
        </div>
        <div>
        Render a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

        If you call ReactDOM.hydrateRoot() on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.
        </div>
    </div>

    </>
  )
}

export default SimpleTextComponent;
