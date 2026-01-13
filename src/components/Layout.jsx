import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Search, ShieldCheck } from 'lucide-react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
            {/* Navigation */}
            <nav className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <ShieldCheck size={20} />
                        </div>
                        <span>智投云 | BidingCloud</span>
                    </Link>

                    <div className="hidden md:flex flex-1 max-w-md relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="搜索标书模板、行业案例..."
                            className="pl-9 bg-slate-100/50 border-slate-200 focus:bg-white transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="hidden sm:flex">登录</Button>
                        <Button>注册会员</Button>
                    </div>
                </div>
            </nav>

            <div className="flex-1">
                <Outlet />
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                            <ShieldCheck size={20} />
                            <span>智投云</span>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed">
                            致力于为企业提供最专业的招投标解决方案。汇集行业精英经验，让中标更简单。
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">平台服务</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">模板中心</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">专家咨询</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">标书代写</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">企业内训</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">联系我们</h4>
                        <ul className="space-y-2 text-sm">
                            <li>电话：400-123-4567</li>
                            <li>邮箱：support@bidingcloud.com</li>
                            <li>地址：科技园区A栋18层</li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
                    © 2024 智投云 BidingCloud. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
