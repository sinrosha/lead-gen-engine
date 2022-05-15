import  styles from  "./styles.module.css"
import { AiOutlineSend } from "react-icons/ai";

const FAQ = () =>{
    const data=[{
        question: "How do you recommend someone to Weekday for jobs ?",
        answer:" The Chrome extension works in tandem with your LinkedIn profile. You will be given a choice of your connections to choose from to recommend to Weekday. Based on the number of recommendations, you will earn rewards."

    },{
        question: "What if I want to recommend people but don't want to install the Chrome extension ?",
        answer:"Sure. You can this form to send us recommendations "

    },{
        question: "Which are the companies my recommended people get suggested ?",
        answer:"Weekday currently works with over 90 companies from across the globe. Most of them are VC-backed high growth startups."

    },{
        question: "How does the rewards system work at Weekday ?",
        answer:"There are 3 levels to the rewards system.Just for referring people When you are using the extension to refer your friends, you will be prompted if you want to make your LinkedIn connections available for outreach, and also make a selection to refer from your list of connections. You will be rewarded separately to make your LinkedIn connections available and also for each candidate you refer.When they interview. Once your referrals have been contacted by Weekday, if they are looking for jobs, they will begin giving interviews with the companies that we are currently working with."

    },{
        question: "Which are the companies my recommended people get suggested ?",
        answer:" Rewards are given when each referral has the first interview scheduled.When they get hired: When a referral finds a job through Weekday, you will receive an email notifying you that your referral has been hired and will ask you to share your bank details for money transfer. Once the referral joins the company, payment will be disbursed (25% at the time of joining and rest after 3 months of staying)."

    }]
    return (
      <section id="FAQ" className={`${styles.faq} relative py-12 md:py-16`} >
            <div className="md:container mx-auto px-4">
                <div className="grid grid-cols-1">
                    <div className="heading">
                    <h3 className={`${styles.subTitle} block w-full text-center mb-2 text-lg font-semibold leading-6`}>FAQ</h3>
                    <h2 className={`${styles.title} text-white block mt-0 mb-14 font-bold text-center text-5xl`}>Frequently Asked <br/> Questions</h2>
                    </div>
                </div>
                <div className={` ${styles.content} grid grid-cols-1 mr-auto ml-auto`}>
                    <div className="">
                        {data.map((info)=>{
                            return <> <div className={`${styles.question} text-left font-bold text-white pb-1 flex flex-row items-center`}><AiOutlineSend className='pr-2'/>{info.question}</div>
                            <div className={`${styles.answer} pb-3 font-normal mt-0 mb-3 leading-6`}>{info.answer}</div>
                            </>
                        })}
                       
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FAQ;