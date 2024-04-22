import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";

const STARTER_BRANDS = [
{
    IMAGE: 'img/graygrids.svg',
    IMAGE_WHITE: 'img/graygrids-white.svg',
    URL: 'https://graygrids.com/',
    TITLE: 'graygrids'
},
{
    IMAGE: 'img/graygrids.svg',
    IMAGE_WHITE: 'img/graygrids-white.svg',
    URL: 'https://lineicons.com/',
    TITLE: 'lineicons'
},
{
    IMAGE: 'img/graygrids.svg',
    IMAGE_WHITE: 'img/graygrids-white.svg',
    URL: 'https://uideck.com/',
    TITLE: 'uideck'
},
{
    IMAGE: 'img/graygrids.svg',
    IMAGE_WHITE: 'img/graygrids-white.svg',
    URL: 'https://ayroui.com/',
    TITLE: 'ayroui'
},
{
    IMAGE: 'img/graygrids.svg',
    IMAGE_WHITE: 'img/graygrids-white.svg',
    URL: 'https://tailgrids.com/',
    TITLE: 'tailgrids'
}
];

function Brand () {
  return (
    <ClassicPadding className="flex flex-col md:flex-row gap-4 justify-between items-center pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {STARTER_BRANDS.map((item, index) => {
            return <a key={index} href={item.URL}>
              <img
                src={item.IMAGE}
                alt={item.TITLE}
                className="dark:hidden"
              />
              <img
                src={item.IMAGE_WHITE}
                alt={item.TITLE}
                className="hidden dark:block"
              />
            </a>;
          })}
        </div>
      </div>
    {/* <!-- ====== Brands Section End --> */}
    </ClassicPadding>
  );
}

export default Brand;
