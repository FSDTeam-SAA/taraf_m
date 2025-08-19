import ArabicLogo from "./_components/ArabicLogo";
import Banner from "./_components/banner";
import VoiceRecorder from "./_components/VoiceRecorder";

const Page = () => {
  return (
    <div className="bg-black">
      <Banner />
      <VoiceRecorder />
      <ArabicLogo />
    </div>
  );
};

export default Page;
