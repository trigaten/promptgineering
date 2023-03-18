"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7054],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return o?n.createElement(h,r(r({ref:t},d),{},{components:o})):n.createElement(h,r({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},33096:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const i={sidebar_position:10},r="\ud83d\udfe2 Writing An Email",s={unversionedId:"basic_applications/writing_emails",id:"basic_applications/writing_emails",title:"\ud83d\udfe2 Writing An Email",description:"Writing emails can be a time consuming task, especially when you need to read through an email you received first. This section will cover use cases ranging from a simple email telling your boss you are sick today to more complex cold lead emails.",source:"@site/docs/basic_applications/writing_emails.md",sourceDirName:"basic_applications",slug:"/basic_applications/writing_emails",permalink:"/si/docs/basic_applications/writing_emails",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basic_applications/writing_emails.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Introduction",permalink:"/si/docs/basic_applications/introduction"},next:{title:"\ud83d\udfe2 Blogs",permalink:"/si/docs/basic_applications/blog_generation"}},l={},u=[{value:"Basic Sick Day Email",id:"basic-sick-day-email",level:2},{value:"Style Modifiers/Instructions",id:"style-modifiersinstructions",level:2},{value:"Responding to an Email",id:"responding-to-an-email",level:2},{value:"Cold Emails",id:"cold-emails",level:2},{value:"Using unstructured information",id:"using-unstructured-information",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"More",id:"more",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-writing-an-email"},"\ud83d\udfe2 Writing An Email"),(0,a.kt)("p",null,"Writing emails can be a time consuming task, especially when you need to read through an email you received first. This section will cover use cases ranging from a simple email telling your boss you are sick today to more complex cold lead emails."),(0,a.kt)("h2",{id:"basic-sick-day-email"},"Basic Sick Day Email"),(0,a.kt)("p",null,"Imagine that you wake up sick one day and can't go into work (or just don't want to \ud83d\ude08). Here is a simple prompt that writes an email to your boss telling them you are sick. "),(0,a.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"My Name: Mario\\nBoss's name: John\\n\\nWrite an email to my boss saying that I will be out of office today since I am sick. ","initial-response":"Subject: Out of Office - Sick\\n\\nDear John,\\n\\nI am writing to inform you that I will be out of office today due to illness. I apologize for any inconvenience this may cause.\\n\\nI will be sure to keep you updated on my progress and will be back in the office as soon as I am feeling better.\\n\\nThank you for your understanding.\\n\\nSincerely,\\nMario","max-tokens":"256","box-rows":"8","model-temp":"0","top-p":"0"},(0,a.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,a.kt)("p",null,"This email works, but is pretty boring. Let's spice it up a bit!"),(0,a.kt)("h2",{id:"style-modifiersinstructions"},"Style Modifiers/Instructions"),(0,a.kt)("p",null,"It is very easy to modify the style of the email. For example, you can ask the AI to be 'humorous' or instruct it to 'Include a funny reason'."),(0,a.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"My Name: Mario\\nBoss's name: John\\n\\nWrite a humorous yet professional email to my boss saying that I will be out of office today since I am sick. \\nBe concise and funny. Include a funny reason:","initial-response":"Dear John,\\n\\nI'm writing to let you know that I will be out of office today. I know I'm supposed to be working, but I just couldn't resist the call of the siren song of the local donut shop. I'm sure you understand.\\n\\nI'll be back in the office tomorrow and will make up the time.\\n\\nThanks,\\nMario","max-tokens":"256","box-rows":"10","model-temp":"0.7","top-p":"1"},(0,a.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here is another example that is more serious/professional."),(0,a.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"My Name: Mario\\nBoss's name: John\\n\\nWrite a **serious**, professional email to my boss saying that I will be out of office today since I am sick. \\nBe concise:","initial-response":"Subject: Out of Office - Sick\\n\\nDear John,\\n\\nI am writing to inform you that I will be out of office today due to illness. I apologize for any inconvenience this may cause.\\n\\nThank you for your understanding.\\n\\nSincerely,\\nMario","max-tokens":"256","box-rows":"8","model-temp":"0","top-p":"0"},(0,a.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"responding-to-an-email"},"Responding to an Email"),(0,a.kt)("p",null,"Imagine that you receive a long email from your boss with a lot of information. You need to respond to the email, but you don't have time to read through the entire thing. You can plug the email into an AI and ask it to ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate a summary of this and a list of action items"),"."),(0,a.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Dear Mario,\\n\\nI hope you're doing well. I am writing to provide you with some updates on our company and to request your assistance in addressing an issue with the user interface (UI) of the software you have been working on.\\n\\nAs you know, our company has been focusing on providing a user-friendly experience to our customers, and we have identified some issues with the UI of the software. Specifically, we have received feedback from our users that they are having difficulty accessing certain features, and that the UI is not intuitive enough.\\n\\nWe need your help to address these issues and make improvements to the UI of the software. This may involve making changes to the layout, design, or functionality of the UI. We believe that your expertise in software development and your familiarity with the software will make you the ideal person to help us with this task.\\n\\nIf you need any additional resources or support to complete this task, please do not hesitate to let me know. Additionally, I would appreciate it if you could provide me with an estimated timeline for when you expect these modifications to be completed.\\n\\nIf you have any questions or need further clarification, please do not hesitate to contact me.\\n\\nThank you for your hard work and dedication to our company. I look forward to hearing back from you soon.\\n\\nBest regards,\\nJohn\\n\\nGenerate a summary of this and a list of action items.","initial-response":"Summary: John is requesting Mario's assistance in addressing user interface issues with the software Mario has been working on. The issues involve difficulty accessing certain features and the UI not being intuitive enough. Mario's expertise in software development and familiarity with the software make him the ideal person to help with this task.\\n\\nAction Items:\\n- Make changes to the layout, design, or functionality of the UI\\n- Request additional resources or support if needed\\n- Provide an estimated timeline for completion of modifications","max-tokens":"256","box-rows":"18","model-temp":"0","top-p":"0"},(0,a.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,a.kt)("br",null),"You can then use this summary to write a response email.",(0,a.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Summary: John is requesting Mario's assistance in addressing user interface issues with the software Mario has been working on. The issues involve difficulty accessing certain features and the UI not being intuitive enough. Mario's expertise in software development and familiarity with the software make him the ideal person to help with this task.\\n\\nAction Items:\\n- Make changes to the layout, design, or functionality of the UI\\n- Request additional resources or support if needed\\n- Provide an estimated timeline for completion of modifications\\n\\nWrite a response email from Mario using the above email summary:","initial-response":"Dear John,\\n\\nThank you for reaching out to me about the user interface issues with the software I have been working on. I understand the importance of making sure the UI is intuitive and easy to use, and I am happy to help.\\n\\nI will begin making changes to the layout, design, and functionality of the UI to address the issues you have mentioned. If I need additional resources or support, I will let you know. I will also provide an estimated timeline for completion of the modifications.\\n\\nPlease let me know if you have any questions or concerns.\\n\\nSincerely,\\nMario","max-tokens":"256","box-rows":"18","model-temp":"0","top-p":"0"},(0,a.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,a.kt)("br",null),"Note that you can often combine these two steps into one. You can ask the AI to generate a response email directly from the email you received.",(0,a.kt)("h2",{id:"cold-emails"},"Cold Emails"),(0,a.kt)("p",null,"Cold emails are emails sent to people that you don't know. It is difficult to get a response from cold emails, so it can be helpful to send out a lot of personally customized emails. Let's see how to do that with GPT-3",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,a.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Company name: Bark Inc\\nMy name: Mike\\nWrite a cold outreach email","initial-response":"Dear John,\\n\\nI'm writing to let you know that I will be out of office today. I know I'm supposed to be working, but I just couldn't resist the call of the siren song of the local donut shop. I'm sure you understand.\\n\\nI'll be back in the office tomorrow and will make up the time.\\n\\nThanks,\\nZach","max-tokens":"256","box-rows":"10","model-temp":"0","top-p":"0"},(0,a.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,a.kt)("p",null,"This is neat, but we can do better. Let's add some more information to the prompt."),(0,a.kt)("h3",{id:"using-unstructured-information"},"Using unstructured information"),(0,a.kt)("p",null,"Say you have the linkedin profile of the person you are sending the email to. You can add that information to the prompt to make the email more personalized. Let's use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/snpranav/"},"founder of Strive's LinkedIn")," as an example. We'll copy a bunch of information from his profile and add it to the prompt."),(0,a.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Pranav Shikarpur  1st degree connection1st\\nDeveloper Advocate. Problem Solver. Previously: Co-founder Strive, Intel ISEF Alum\\n\\nExperienceExperience\\nThales Cloud Security logo\\nDeveloper AdvocateDeveloper Advocate\\nThales Cloud SecurityThales Cloud Security\\nApr 2022 - Present \xb7 1 yrApr 2022 - Present \xb7 1 yr\\n- Executed go-to-market and boosted developer engagement for Thales\u2019s new data encryption product launch.\\n- Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022.\\n- Presented a talk at HashiCorp\u2019s annual conference - HashiConf 2022 in LA - about \u201cSecuring Any Data Source\u201d.- Executed go-to-market and boosted developer engagement for Thales\u2019s new data encryption product launch. - Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022. - Presented a talk at HashiCorp\u2019s annual conference - HashiConf 2022 in LA - about \u201cSecuring Any Data Source\u201d.\u2026see more\\nSkills: Data Encryption Standard (DES) \xb7 Cryptography \xb7 Cybersecurity \xb7 Content Creation \xb7 Azure Kubernetes Service (AKS) \xb7 Google Kubernetes Engine (GKE)Skills: Data Encryption Standard (DES) \xb7 Cryptography \xb7 Cybersecurity \xb7 Content Creation \xb7 Azure Kubernetes Service (AKS) \xb7 Google Kubernetes Engine (GKE)\\nStartup Shell logo\\nDirector of Founder ResourcesDirector of Founder Resources\\nStartup ShellStartup Shell\\nFeb 2022 - Present \xb7 1 yr 2 mosFeb 2022 - Present \xb7 1 yr 2 mos\\nCollege Park, Maryland, United StatesCollege Park, Maryland, United States\\n- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc.\\n- Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc. - Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.\\nSkills: Strategic PartnershipsSkills: Strategic Partnerships\\nStrive Network logo\\nCo-FounderCo-Founder\\nStriveStrive\\nDec 2020 - Nov 2021 \xb7 1 yrDec 2020 - Nov 2021 \xb7 1 yr\\n- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users.\\n- Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution.\\n- Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users. - Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution. - Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.\u2026see more\\nSkills: Go (Programming Language) \xb7 Python (Programming Language) \xb7 Product Management \xb7 Product Marketing \xb7 Next.js \xb7 Amazon EKS\\n\\nEducationEducation\\nUniversity of Maryland logo\\nUniversity of MarylandUniversity of Maryland\\nUndergraduate, Mathematics and Computer ScienceUndergraduate, Mathematics and Computer Science\\nAug 2019 - May 2023Aug 2019 - May 2023\\nActivities and societies: Director of Founder Resources at Startup ShellActivities and societies: Director of Founder Resources at Startup Shell\\nExploring the beauty of mathematics with the practicality of computer science\\n\\nWrite a cold outreach email to this founder, pitching him our product, Nightfall, which is a neo-CRM. My name is Max. Make the email formal, yet approachable. Mention relevant details from his LinkedIn information above to help pitch the product.Pranav Shikarpur  1st degree connection1st\\nDeveloper Advocate. Problem Solver. Previously: Co-founder Strive, Intel ISEF Alum\\n\\nExperienceExperience\\nThales Cloud Security logo\\nDeveloper AdvocateDeveloper Advocate\\nThales Cloud SecurityThales Cloud Security\\nApr 2022 - Present \xb7 1 yrApr 2022 - Present \xb7 1 yr\\n- Executed go-to-market and boosted developer engagement for Thales\u2019s new data encryption product launch.\\n- Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022.\\n- Presented a talk at HashiCorp\u2019s annual conference - HashiConf 2022 in LA - about \u201cSecuring Any Data Source\u201d.- Executed go-to-market and boosted developer engagement for Thales\u2019s new data encryption product launch. - Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022. - Presented a talk at HashiCorp\u2019s annual conference - HashiConf 2022 in LA - about \u201cSecuring Any Data Source\u201d.\u2026see more\\nSkills: Data Encryption Standard (DES) \xb7 Cryptography \xb7 Cybersecurity \xb7 Content Creation \xb7 Azure Kubernetes Service (AKS) \xb7 Google Kubernetes Engine (GKE)Skills: Data Encryption Standard (DES) \xb7 Cryptography \xb7 Cybersecurity \xb7 Content Creation \xb7 Azure Kubernetes Service (AKS) \xb7 Google Kubernetes Engine (GKE)\\nStartup Shell logo\\nDirector of Founder ResourcesDirector of Founder Resources\\nStartup ShellStartup Shell\\nFeb 2022 - Present \xb7 1 yr 2 mosFeb 2022 - Present \xb7 1 yr 2 mos\\nCollege Park, Maryland, United StatesCollege Park, Maryland, United States\\n- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc.\\n- Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc. - Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.\\nSkills: Strategic PartnershipsSkills: Strategic Partnerships\\nStrive Network logo\\nCo-FounderCo-Founder\\nStriveStrive\\nDec 2020 - Nov 2021 \xb7 1 yrDec 2020 - Nov 2021 \xb7 1 yr\\n- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users.\\n- Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution.\\n- Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users. - Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution. - Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.\u2026see more\\nSkills: Go (Programming Language) \xb7 Python (Programming Language) \xb7 Product Management \xb7 Product Marketing \xb7 Next.js \xb7 Amazon EKS\\n\\nEducationEducation\\nUniversity of Maryland logo\\nUniversity of MarylandUniversity of Maryland\\nUndergraduate, Mathematics and Computer ScienceUndergraduate, Mathematics and Computer Science\\nAug 2019 - May 2023Aug 2019 - May 2023\\nActivities and societies: Director of Founder Resources at Startup ShellActivities and societies: Director of Founder Resources at Startup Shell\\nExploring the beauty of mathematics with the practicality of computer science\\n\\nWrite a cold outreach email to this founder, pitching him our product, Nightfall, which is a neo-CRM. My name is Max. Make the email formal, yet approachable. Mention relevant details from his LinkedIn information above to help pitch the product.","initial-response":"Dear Pranav,\\n\\nMy name is Max and I am reaching out to you because I believe our product, Nightfall, could be a great fit for you. As a co-founder of Strive and Director of Founder Resources at Startup Shell, I'm sure you understand the importance of having a reliable CRM to help manage customer relationships.\\n\\nNightfall is a neo-CRM that helps founders and entrepreneurs like yourself to easily manage customer relationships and track customer data. Our product is designed to be user-friendly and intuitive, so you can focus on growing your business without worrying about the technical details.\\n\\nI think you would find Nightfall to be a great asset to your business. If you're interested, I'd love to schedule a call to discuss further.\\n\\nBest,\\nMax","max-tokens":"256","box-rows":"39","model-temp":"0","top-p":"0"},(0,a.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,a.kt)("p",null,"It is super useful that LLMs can cut through the clutter of all the information we copied from LinkedIn. This cold outreach process can also be automated at a larger scale by scraping LinkedIn for relevant information."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"LLMs can help you write emails! Make sure you read what they write before sending it \ud83d\ude09"),(0,a.kt)("h2",{id:"more"},"More"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zapier.com/blog/use-openai-gpt-3-to-write-emails/"},"Zapier"))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Bonta, A. (2022). How to use OpenAI\u2019s ChatGPT to write the perfect cold email. https://www.streak.com/post/how-to-use-ai-to-write-perfect-cold-emails\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);