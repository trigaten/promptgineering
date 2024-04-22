import React from "react";
import { useEffect } from 'react';
import { SVGLeftArrow } from './svg/SVGLeftArrow';
import { SVGRightArrow } from './svg/SVGRightArrow';
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";

/**
 * 加载外部资源
 * @param url 地址 例如 https://xx.com/xx.js
 * @param type js 或 css
 * @returns {Promise<unknown>}
 */
function loadExternalResource(url, type) {
    // 检查是否已存在
    const elements =
      type === 'js'
        ? document.querySelectorAll(`[src='${url}']`)
        : document.querySelectorAll(`[href='${url}']`)
  
    return new Promise((resolve, reject) => {
      if (elements.length > 0 || !url) {
        resolve(url)
        return url
      }
  
      let tag
  
      if (type === 'css') {
        tag = document.createElement('link')
        tag.rel = 'stylesheet'
        tag.href = url
      } else if (type === 'font') {
        tag = document.createElement('link')
        tag.rel = 'preload'
        tag.as = 'font'
        tag.href = url
      } else if (type === 'js') {
        tag = document.createElement('script')
        tag.src = url
      }
      if (tag) {
        tag.onload = () => {
          console.log('Load Success', url)
          resolve(url)
        }
        tag.onerror = () => {
          console.log('Load Error', url)
          reject(url)
        }
        document.head.appendChild(tag)
      }
    })
  }


/**
 * 一些外部js
 */
const loadExternal = async () => {
  await loadExternalResource(
    'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.css',
    'css'
  )
  await loadExternalResource(
    'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js',
    'js'
  )

  const Swiper = window.Swiper
  if (!Swiper) {
    return
  }
  // Testimonial
  // eslint-disable-next-line no-unused-vars
  const testimonialSwiper = new Swiper('.testimonial-carousel', {
    slidesPerView: 1,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  })
}


const STARTER_TESTIMONIALS_STAR_ICON = '/images/starter/testimonials/icon-star.svg'; // 评分图标

const STARTER_TESTIMONIALS_ITEMS = [
    {
    STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
    STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
    STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
    STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
    STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
    STARTER_TESTIMONIALS_ITEM_TEXT:
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
    STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
    STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
    STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
    STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
    STARTER_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
    STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
    STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
    STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
    STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
    STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
    STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
    STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
    STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
    STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
    STARTER_TESTIMONIALS_ITEM_TEXT:
        '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
    STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
    STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
    STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
    STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
    STARTER_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
    STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
    STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
    STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
    STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
];



function Testimonials () {
  useEffect(() => {
    loadExternal()
  }, [])
  // 用户评分
  const ratings = [1, 2, 3, 4, 5]

  return (
    <ClassicPadding className="flex flex-col md:flex-row gap-4 justify-between items-center pt-16 md:pt-24 pb-16 md:pb-24">
      <section
        id='testimonials'
        className='overflow-hidden bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                    用户反馈
                </span>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
                    我们的用户怎么说
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                    数万用户将LearnPrompt选为他们接触AI的首选平台。通过学习手册、交流社群以及技术咨询，用户们成功实现了他们在AI领域的各项目标
                </p>
              </div>
            </div>
          </div>

          <div className='-m-5'>
            <div className='swiper testimonial-carousel common-carousel p-5'>
              <div className='swiper-wrapper'>
                {/* 用户评价卡牌 */}
                {STARTER_TESTIMONIALS_ITEMS.map((item, index) => {
                  return (
                    <div key={index} className='swiper-slide'>
                      <div className='rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]'>
                        <div className='mb-[18px] flex items-center gap-[2px]'>
                          {ratings.map((rating, index) => (
                            <img
                              key={index}
                              alt='star icon' // 为每个图片设置唯一的 key 属性
                              src={STARTER_TESTIMONIALS_STAR_ICON}
                            />
                          ))}
                        </div>

                        <p className='mb-6 text-base text-body-color dark:text-dark-6'>
                          “{item.STARTER_TESTIMONIALS_ITEM_TEXT}”
                        </p>

                        <a
                          href={item.STARTER_TESTIMONIALS_ITEM_URL}
                          className='flex items-center gap-4'>
                          <div className='h-[50px] w-[50px] overflow-hidden rounded-full'>
                            <img
                              src={item.STARTER_TESTIMONIALS_ITEM_AVATAR}
                              alt='author'
                              className='h-[50px] w-[50px] overflow-hidden rounded-full object-cover'
                            />
                          </div>

                          <div>
                            <h3 className='text-sm font-semibold text-dark dark:text-white'>
                              {item.STARTER_TESTIMONIALS_ITEM_NICKNAME}
                            </h3>
                            <p className='text-xs text-body-secondary'>
                              {item.STARTER_TESTIMONIALS_ITEM_DESCRIPTION}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 切换按钮  */}
              <div className='mt-[60px] flex items-center justify-center gap-1'>
                <div className='swiper-button-prev'>
                  <SVGLeftArrow />
                </div>
                <div className='swiper-button-next'>
                  <SVGRightArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClassicPadding>
  );
}

export default Testimonials;