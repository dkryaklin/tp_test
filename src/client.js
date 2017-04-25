(
    function() {
        function getElemsByInitStatus(initStatus) {
            return document.querySelectorAll(`[data-initaviasales='${initStatus}']`);
        };

        function resizeElem(elem) {
            if (elem.contentWindow.document.documentElement !== null && elem.contentWindow.document.body !== null) {
                let newHeight = "";

                elem.height = newHeight;

                const bodyScrollHeight = elem.contentWindow.document.body.scrollHeight;
                const docScrollHeight = elem.contentWindow.document.documentElement.scrollHeight;

                if (bodyScrollHeight < docScrollHeight) {
                    newHeight = `${bodyScrollHeight}px`;
                } else {
                    newHeight = `${docScrollHeight}px`;
                }

                elem.height = newHeight;
            }
        };

        function handleOnload() {
            const elems = getElemsByInitStatus(false);

            for (let i = 0; i < elems.length; i++) {
                const elem = elems[i];

                elem.addEventListener('load', function() {
                    setImmediate(function() {
                        resizeElem(elem);
                    });
                });

                resizeElem(elem);

                elem.setAttribute('data-initaviasales', "true");
            }
        };

        function handleResize() {
            //let timeout;

            window.addEventListener('resize', function() {
                //clearTimeout(timeout);

                //timeout = setTimeout(function() {
                    const elems = getElemsByInitStatus(true);

                    for (let i = 0; i < elems.length; i++) {
                        resizeElem(elems[i]);
                    }
                //}, 50);
            })
        };

        handleOnload();
        handleResize();
    }
)()