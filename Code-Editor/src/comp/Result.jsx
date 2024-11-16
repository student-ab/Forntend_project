
import PropTypes from 'prop-types'

function Result({srccode}) {
    return (
        <div>
            <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
                <h2
                    className="text-lg font-semibold mb-2 text-white">
                </h2>
                <iframe
                    className="w-full h-60 border border-gray-700 rounded-md"
                    srcDoc={srccode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                    {/* The <iframe> element in HTML is used to embed another HTML document within the current HTML document. 
                    The srcDoc attribute is a special attribute for the <iframe> element that allows you to specify the HTML
                     content directly within the iframe 
                    
                    srcDoc={srccode}: This attribute is  " specific to React" and allows you to embed HTML content directly into the iframe. 
                    The srccode variable (which should be a string containing HTML) is inserted into the iframe's content.
                     title="output": This attribute provides a title for the iframe, which can be used by assistive technologies (like screen readers) to describe the iframe's content.
                     sandbox="allow-scripts": This attribute is used to enable certain features in the iframe, such as running scripts, but restricts others to enhance security.
                    In this case, it allows scripts to run within the iframe.
                    The <iframe> element is used here to display the HTML content stored in the srccode variable. This can be useful for dynamically displaying HTML content,
                     such as the output of a code editor or a live preview of a web page.*/}
                </iframe>
            </div>
        </div>
    )
}

Result.propTypes = {
    srccode: PropTypes.string.isRequired,
}

export default Result
