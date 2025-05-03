
import { Facebook, Share2 } from 'lucide-react';

interface ShareProps { url: string; title: string; }

export default function ShareButtons({url, title}: ShareProps){
  const shareKakao = () => {
    //@ts-ignore
    if(window.Kakao) window.Kakao.Share.sendScrap({ requestUrl: url });
  };
  const copy = () => {
    navigator.clipboard.writeText(url);
    alert('링크가 복사되었습니다!');
  };
  return (
    <div className='flex gap-3'>
      <button onClick={shareKakao} className='p-2 rounded-full bg-yellow-400/80 text-sm'>카카오톡</button>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target='_blank' rel='noreferrer' className='p-2 rounded-full bg-blue-600/80 text-white text-sm flex items-center gap-1'><Facebook size={16}/>공유</a>
      <button onClick={copy} className='p-2 rounded-full bg-gray-200 text-sm flex items-center gap-1'><Share2 size={16}/>링크</button>
    </div>
  )
}
