/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SVGAvatarBG } from './svg/SVGAvatarBG'
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";

const STARTER_TEAM_TITLE = '团队成员';
const STARTER_TEAM_TEXT_1 = '我们的开发者团队';
const STARTER_TEAM_TEXT_2 = 'LearnPrompt 由众多AI技术爱好者们共同合作完成，感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>';

const STARTER_TEAM_ITEMS =  [
    {
    STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
    STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
    STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
];

function Team() {
  return (
    <ClassicPadding className="flex flex-col md:flex-row gap-4 justify-between items-center pt-16 md:pt-24 pb-16 md:pb-24">
      <section
        id='team'
        className='overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                STARTER_TEAM_TITLE
                </span>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
                STARTER_TEAM_TEXT_1
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: STARTER_TEAM_TEXT_2
                  }}
                  className='text-base text-body-color dark:text-dark-6'></p>
              </div>x
            </div>
          </div>

          {/* 团队成员排列矩阵 */}
          <div className='-mx-4 flex flex-wrap justify-center'>
            {STARTER_TEAM_ITEMS.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4'>
                  <div className='group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none'>
                    {/* 头像 */}
                    <div className='relative z-10 mx-auto mb-5 h-[120px] w-[120px]'>
                      <img
                        src={item.STARTER_TEAM_ITEM_AVATAR}
                        alt='team image'
                        className='h-[120px] w-[120px] rounded-full'
                      />
                      <span className='absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100'></span>
                      <span className='absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100'>
                        <SVGAvatarBG />
                      </span>
                    </div>

                    {/* 文字介绍 */}
                    <div className='text-center'>
                      <h4 className='mb-1 text-lg font-semibold text-dark dark:text-white'>
                        {item.STARTER_TEAM_ITEM_NICKNAME}
                      </h4>

                      <p className='mb-5 text-sm text-body-color dark:text-dark-6'>
                        {item.STARTER_TEAM_ITEM_DESCRIPTION}
                      </p>

                      {/* 社交链接 */}
                      {/* <div className='flex items-center justify-center gap-5'>
                        <a className='text-dark-6 hover:text-primary'>
                          <SVGFacebook className='fill-current' />
                        </a>
                        <a className='text-dark-6 hover:text-primary'>
                          <SVGTwitter className='fill-current' />
                        </a>
                        <a className='text-dark-6 hover:text-primary'>
                          <SVGInstagram className='fill-current' />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Team Section End --> */}
    </ClassicPadding>
  );
}

export default Team;