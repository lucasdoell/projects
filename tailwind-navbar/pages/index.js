import Head from 'next/head'
import Image from 'next/image'
import ChannelBar from '../components/ChannelBar';
import ContentContainer from '../components/ContentContainer';
import Sidebar from '../components/Sidebar';
import TopNavigation from '../components/TopNav';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
      {/* <TopNavigation /> */}
    </div>
  );
}
