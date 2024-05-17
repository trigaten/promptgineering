import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import React from "react";

// 还差两个
const STARTER_BRANDS = [
{
    IMAGE: 'img/brands/wenxin.svg',
    IMAGE_WHITE: 'img/brands/wenxin.svg',
    URL: 'https://yiyan.baidu.com/',
    TITLE: '文心一言'
},
{
    IMAGE: 'img/brands/zhipu.svg',
    IMAGE_WHITE: 'img/brands/zhipu.svg',
    URL: 'https://www.zhipuai.cn/',
    TITLE: '智谱AI'
},
{
  IMAGE: 'img/brands/openai.svg',
  IMAGE_WHITE: 'img/brands/openai.svg',
  URL: 'https://www.doubao.com/chat/',
  TITLE: '豆包'
},
{
    IMAGE: 'img/brands/dreamina.svg',
    IMAGE_WHITE: 'img/brands/dreamina.svg',
    URL: 'https://www.capcut.com/ai-tool',
    TITLE: 'Dreamina'
},
{
    IMAGE: 'img/brands/kimi.svg',
    IMAGE_WHITE: 'img/brands/kimi.svg',
    URL: 'https://kimi.moonshot.cn/',
    TITLE: 'Kimi'
},
{
    IMAGE: 'img/brands/xiaobing.svg',
    IMAGE_WHITE: 'img/brands/xiaobing.svg',
    URL: 'https://business.xiaoice.com/Home/AIBeing',
    TITLE: '小冰数字人'
}
];

function Brand () {
  return (
    <ClassicPadding className="flex flex-col md:flex-row gap-4 justify-between items-center pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="container px-4">
          <h2 className='text-center mb-12 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
          Brand Partners
          </h2>
        <div className={`grid grid-cols-6 gap-8 xl:gap-11 justify-items-center`}>
          {STARTER_BRANDS.map((item, index) => {
            return <a key={index} href={item.URL}>
              <img
                src={item.IMAGE}
                alt={item.TITLE}
                className="dark:hidden w-auto h-auto"
              />
              <img
                src={item.IMAGE_WHITE}
                alt={item.TITLE}
                className="hidden dark:block w-auto h-auto"
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
