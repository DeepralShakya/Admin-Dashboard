'use client'

import DashboardCard from "@/components/dashboard/dashboardCard";
import PostTable from "@/components/posts/PostTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard title="Posts" count={200} icon={<Newspaper className="text-orange-500" size={72}/>}/>
        <DashboardCard title="Categories" count={30} icon={<Folder className="text-orange-500" size={72}/>}/>
        <DashboardCard title="Users" count={1000} icon={<User className="text-orange-500" size={72}/>}/>
        <DashboardCard title="Comments" count={1500} icon={<MessageCircle className="text-orange-500" size={72}/>}/>
      </div>
      <PostTable title="Latest Posts"/>
    </div>
  );
}
