import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, FileText, Download, Edit2, TrendingUp, Users, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { templates, categories } from "../data/templates";

function Home() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const filteredTemplates = templates.filter(t => {
        const matchesCategory = activeCategory === "all" || t.category === activeCategory;
        const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-[calc(100vh-theme(spacing.16))]">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white border-b">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50" />
                <div className="container mx-auto px-4 py-20 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
                        ✨ 全新 AI 辅助招投标系统上线
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-primary to-slate-900 bg-clip-text text-transparent pb-2">
                        让每一次招投标都胜算在握
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        汇集各行业优质中标模板，在线智能编辑，一键生成专业标书。
                        支持建筑、IT、采购、服务等全领域。
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="relative w-full max-w-sm sm:hidden">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input
                                placeholder="搜索模板..."
                                className="pl-9"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 w-full sm:w-auto">
                            浏览所有模板
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">
                            上传我的文档
                        </Button>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                        <div className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <FileText size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">海量模板库</h3>
                                <p className="text-sm text-muted-foreground">覆盖100+细分行业，每日更新优质中标案例</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                <Edit2 size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">在线智能编辑</h3>
                                <p className="text-sm text-muted-foreground">所见即所得编辑器，支持一键替换关键信息</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">中标率提升</h3>
                                <p className="text-sm text-muted-foreground">专家审核把关，规范化文档提升评分优势</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        热门模板推荐
                    </h2>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar mask-gradient">
                        {categories.map(cat => (
                            <Button
                                key={cat.id}
                                variant={activeCategory === cat.id ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveCategory(cat.id)}
                                className="whitespace-nowrap"
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTemplates.map(template => (
                        <Card
                            key={template.id}
                            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border-slate-200 cursor-pointer"
                            onClick={() => navigate(`/template/${template.id}`)}
                        >
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-slate-700 shadow-sm">
                                    {template.categoryLabel}
                                </div>
                            </div>

                            <CardHeader className="p-5 pb-3">
                                <div className="flex items-center gap-2 mb-2">
                                    {template.tags.map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                                    {template.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2 mt-2">
                                    {template.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="p-5 pt-0">
                                <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                                    <div className="flex items-center">
                                        <Users className="w-3 h-3 mr-1" />
                                        {template.downloads} 次下载
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {template.uploadDate}
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-5 pt-0 flex gap-3">
                                <Button className="w-full">
                                    <FileText className="w-4 h-4 mr-2" />
                                    查看详情
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {filteredTemplates.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                            <Search size={32} />
                        </div>
                        <h3 className="text-lg font-medium text-slate-900">未找到相关模板</h3>
                        <p className="text-muted-foreground mt-2">换个关键词试试，或者浏览其他分类</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Home;
