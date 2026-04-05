"use client";

import { 
  FileText, 
  Mic, 
  BarChart3, 
  Settings, 
  ChevronDown, 
  User, 
} from "lucide-react";
import { useState } from "react";

export default function NivoWorkFeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const historyItems = [ 
    "## 一、创始人背景 创始…", 
    "## 极渊光学 ARVR 模组…", 
  ]; 

  const steps = [ 
    "上传录音/导入会议", 
    "实时转写中", 
    "AI 生成纪要时", 
    "查看/编辑纪要时", 
    "模板选择与套用时", 
    "会员购买/套餐使用时", 
    "其他环节", 
  ]; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      nickname: formData.get("nickname"),
      contact: formData.get("contact"),
      step: formData.get("step"),
      details: formData.get("details"),
      suggestion: formData.get("suggestion"),
      consent: formData.get("consent") === "on",
    };

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage("反馈提交成功！感谢您的宝贵意见。");
        e.currentTarget.reset();
      } else {
        setSubmitMessage("提交失败，请稍后重试。");
      }
    } catch (error) {
      setSubmitMessage("网络错误，请稍后重试。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return ( 
    <div className="min-h-screen bg-[#f6f6f5] text-[#2f2f2f]"> 
      <div className="flex min-h-screen"> 
        <aside className="hidden w-[336px] shrink-0 border-r border-[#e7e5e4] bg-[#f7f7f6] xl:flex xl:flex-col"> 
          <div className="px-5 pb-6 pt-8"> 
            <div className="flex items-center gap-3"> 
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white shadow-sm"> 
                <span className="text-2xl font-semibold">N</span> 
              </div> 
              <div className="text-[23px] font-semibold tracking-tight text-[#2b2b2b]"> 
                NivoWork 
              </div> 
            </div> 
          </div> 

          <nav className="px-4"> 
            <div className="space-y-2"> 
              <button 
                type="button" 
                className="flex w-full items-center gap-4 rounded-2xl bg-[#ecebea] px-5 py-3.5 text-left text-[17px] font-medium text-[#2f2f2f]" 
              > 
                <FileText className="h-5 w-5 text-[#4a4a48]" /> 
                <span>会后整理</span> 
              </button> 
              <button 
                type="button" 
                className="flex w-full items-center gap-4 rounded-2xl px-5 py-3.5 text-left text-[17px] font-medium text-[#2f2f2f] hover:bg-[#f0efee]" 
              > 
                <Mic className="h-5 w-5 text-[#4a4a48]" /> 
                <span>实时会议</span> 
              </button> 
              <button 
                type="button" 
                className="flex w-full items-center gap-4 rounded-2xl px-5 py-3.5 text-left text-[17px] font-medium text-[#2f2f2f] hover:bg-[#f0efee]" 
              > 
                <BarChart3 className="h-5 w-5 text-[#4a4a48]" /> 
                <span>分析后台</span> 
              </button> 
              <button 
                type="button" 
                className="flex w-full items-center gap-4 rounded-2xl px-5 py-3.5 text-left text-[17px] font-medium text-[#2f2f2f] hover:bg-[#f0efee]" 
              > 
                <Settings className="h-5 w-5 text-[#4a4a48]" /> 
                <span>管理后台</span> 
              </button> 
            </div> 
          </nav> 

          <div className="px-4 pt-12 text-sm text-[#9a9894]">历史记录</div> 
          <div className="space-y-3 px-4 pt-6"> 
            {historyItems.map((item) => ( 
              <div 
                key={item} 
                className="flex items-center gap-3 px-2 text-[15px] text-[#7d7a76]" 
              > 
                <FileText className="h-4 w-4 shrink-0 text-[#aaa7a2]" /> 
                <span className="truncate">{item}</span> 
              </div> 
            ))} 
          </div> 

          <div className="px-4 pt-10 text-center text-[14px] text-[#a9a6a1]"> 
            收起，仅显示近7天 
          </div> 

          <div className="mt-auto px-4 pb-6 pt-8"> 
            <div className="rounded-3xl bg-[#161616] p-5 text-white shadow-sm"> 
              <div className="inline-flex rounded-xl bg-[#ffdd00) px-3 py-1 text-[15px] font-semibold text-black"> 
                限时会员活动 
              </div> 
              <div className="mt-4 text-[15px] leading-7 text-[#f1f1f1]"> 
                即日至4月16日下单，首月立享 
                <span className="ml-1 font-semibold text-[#ffdd00]">5折特惠</span> 
              </div> 
            </div> 

            <div className="mt-6 flex items-center justify-between px-2"> 
              <div className="flex items-center gap-3"> 
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d5d0] bg-white"> 
                  <User className="h-5 w-5 text-[#4d4b47]" /> 
                </div> 
                <div className="text-[17px] font-medium text-[#33312e]">我的</div> 
                <div className="rounded-xl bg-[#161616] px-3 py-1 text-[14px] font-semibold text-white"> 
                  Power 
                </div> 
              </div> 
              <ChevronDown className="h-5 w-5 text-[#7e7b77]" /> 
            </div> 
          </div> 
        </aside> 

        <main className="flex-1 px-6 py-8 lg:px-10 xl:px-16 xl:py-10"> 
          <div className="mx-auto max-w-[1010px]"> 
            <section className="overflow-hidden rounded-[28px] border border-[#e6e3df] bg-white shadow-sm"> 
              <div className="flex items-center justify-between px-10 py-9"> 
                <div className="flex items-center gap-4"> 
                  <FileText className="h-7 w-7 text-[#9a9894]" /> 
                  <h1 className="text-[24px] font-semibold tracking-tight text-[#2f2f2f]"> 
                    内测反馈 
                  </h1> 
                </div> 
              </div> 

              <div className="px-10 pb-10"> 
                <div className="max-w-[760px]"> 
                  <form className="space-y-8" onSubmit={handleSubmit}> 
                    <div> 
                      <label 
                        htmlFor="nickname" 
                        className="mb-3 block text-[15px] font-medium text-[#4a4845]" 
                      > 
                        你的称呼 
                      </label> 
                      <input 
                        id="nickname" 
                        name="nickname"
                        type="text" 
                        className="w-full rounded-2xl border border-[#e2dfdb] bg-[#fbfbfa] px-4 py-3.5 text-[15px] text-[#2f2f2f] outline-none transition focus:border-[#cfcac4] focus:bg-white" 
                      /> 
                    </div> 

                    <div> 
                      <label 
                        htmlFor="contact" 
                        className="mb-3 block text-[15px] font-medium text-[#4a4845]" 
                      > 
                        联系方式 <span className="text-black">*</span> 
                      </label> 
                      <input 
                        id="contact" 
                        name="contact"
                        required 
                        type="email" 
                        placeholder="请输入邮箱" 
                        className="w-full rounded-2xl border border-[#e2dfdb] bg-[#fbfbfa] px-4 py-3.5 text-[15px] text-[#2f2f2f] outline-none transition placeholder:text-[#b7b3ae] focus:border-[#cfcac4] focus:bg-white" 
                      /> 
                    </div> 

                    <div> 
                      <label 
                        htmlFor="step" 
                        className="mb-3 block text-[15px] font-medium text-[#4a4845]" 
                      > 
                        问题发生在哪个环节 <span className="text-black">*</span> 
                      </label> 
                      <select 
                        id="step" 
                        name="step"
                        required 
                        defaultValue="" 
                        className="w-full rounded-2xl border border-[#e2dfdb] bg-[#fbfbfa] px-4 py-3.5 text-[15px] text-[#2f2f2f] outline-none transition focus:border-[#cfcac4] focus:bg-white" 
                      > 
                        <option value="" disabled> 
                          请选择 
                        </option> 
                        {steps.map((step) => ( 
                          <option key={step} value={step}> 
                            {step} 
                          </option> 
                        ))} 
                      </select> 
                    </div> 

                    <div> 
                      <label 
                        htmlFor="details" 
                        className="mb-3 block text-[15px] font-medium text-[#4a4845]" 
                      > 
                        请详细描述你的反馈 <span className="text-black">*</span> 
                      </label> 
                      <textarea 
                        id="details" 
                        name="details"
                        required 
                        rows={5} 
                        placeholder="请尽量描述清楚你遇到的问题，比如在哪一步出现、表现是什么、你的预期是什么。" 
                        className="w-full rounded-2xl border border-[#e2dfdb] bg-[#fbfbfa] px-4 py-3.5 text-[15px] leading-7 text-[#2f2f2f] outline-none transition placeholder:text-[#b7b3ae] focus:border-[#cfcac4] focus:bg-white" 
                      /> 
                    </div> 

                    <div> 
                      <label 
                        htmlFor="suggestion" 
                        className="mb-3 block text-[15px] font-medium text-[#4a4845]" 
                      > 
                        你理想中的改进方案 
                      </label> 
                      <textarea 
                        id="suggestion" 
                        name="suggestion"
                        rows={4} 
                        placeholder="可以写你希望怎么改进，比如更简洁、支持某个模板、导出更稳定等。" 
                        className="w-full rounded-2xl border border-[#e2dfdb] bg-[#fbfbfa] px-4 py-3.5 text-[15px] leading-7 text-[#2f2f2f] outline-none transition placeholder:text-[#b7b3ae] focus:border-[#cfcac4] focus:bg-white" 
                      /> 
                    </div> 

                    <div className="rounded-2xl border border-[#ebe7e3] bg-[#faf9f8] px-4 py py-4"> 
                      <label 
                        htmlFor="consent" 
                        className="flex items-start gap-3 text-[14px] leading-6 text-[#7a7773]" 
                      > 
                        <input 
                          id="consent" 
                          name="consent"
                          required 
                          type="checkbox" 
                          className="mt-1 h-4 w-4 accent-black" 
                        /> 
                        <span> 
                          我同意 NivoWork 团队基于本次反馈)进行产品优化与问题排查。 
                        </span> 
                      </label> 
                    </div> 

                    {submitMessage && (
                      <div className={`rounded-2xl px-4 py-3 text-center ${submitMessage.includes("成功") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                        {submitMessage}
                      </div>
                    )}

                    <div className="flex items-center justify-end pt-2"> 
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="rounded-2xl bg-[#171717] px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed" 
                      > 
                        {isSubmitting ? "提交中..." : "提交反馈"}
                      </button> 
                    </div> 
                  </form> 
                </div> 
              </div> 
            </section> 
          </div> 
        </main> 
      </div> 
    </div> 
  ); 
}