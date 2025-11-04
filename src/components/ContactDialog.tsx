import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface ContactDialogProps {
  trigger?: React.ReactNode;
  buttonText?: string;
}

export function ContactDialog({ trigger, buttonText = "联系我们" }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] hover:shadow-[0_0_40px_rgba(15,98,254,0.5)] transition-all duration-300"
            style={{ fontSize: '1.125rem', padding: '1.5rem 3rem' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="bg-[#0B0B0D] border border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-center bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] bg-clip-text text-transparent">
            扫码联系我们
          </DialogTitle>
          <DialogDescription className="sr-only">
            扫描二维码添加微信客服，获取专业咨询服务
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-6 py-4">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <img 
              src="/WechatCode.svg" 
              alt="微信二维码" 
              className="w-64 h-64 object-contain"
            />
          </div>
          <div className="text-center space-y-2">
            <p className="text-gray-300">扫描上方二维码</p>
            <p className="text-gray-400 text-sm">添加微信客服，获取专业咨询</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-gray-400 text-sm">
            <p>电话: +86 186 8660 5444</p>
            <p>邮箱: sunqiang@xidu-tech.com</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}