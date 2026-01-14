import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Users, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from "../components/ui/button";
import { templates } from "../data/templates";
import ReactMarkdown from 'react-markdown';
import OrgChart from '../components/OrgChart';
// Actually, let's just use whitespace-pre-wrap for simplicity as I didn't install react-markdown. 

const TemplateDetail = () => {
    const { id } = useParams();
    const template = templates.find(t => t.id === parseInt(id));

    if (!template) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">未找到模板</h2>
                <Link to="/">
                    <Button>返回首页</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <Link to="/" className="inline-flex items-center text-slate-500 hover:text-primary mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回列表
            </Link>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column: Content */}
                <div className="md:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border p-8 min-h-[600px]">
                        <div className="prose prose-slate max-w-none">
                            {/* Simple Markdown-like rendering for the content string */}
                            {template.content.split('\n').map((line, index) => {
                                if (line.startsWith('# ')) return <h1 key={index} className="text-3xl font-bold mb-6 text-slate-900 border-b pb-2">{line.replace('# ', '')}</h1>;
                                if (line.startsWith('## ')) return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-slate-800">{line.replace('## ', '')}</h2>;
                                if (line.startsWith('### ')) return <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-slate-700">{line.replace('### ', '')}</h3>;
                                if (line.startsWith('- ')) return <li key={index} className="ml-4 mb-2 list-disc">{line.replace('- ', '')}</li>;
                                if (line.trim() === '[[ORG_CHART]]') return <div key={index} className="w-full overflow-x-auto"><OrgChart /></div>;
                                if (line.trim() === '') return <br key={index} />;
                                return <p key={index} className="mb-2 leading-relaxed text-slate-600">{line}</p>;
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <div className="md:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-24">
                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-100 mb-6">
                            <img
                                src={template.image}
                                alt={template.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h1 className="text-xl font-bold text-slate-900 mb-2">{template.title}</h1>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded font-medium">
                                {template.categoryLabel}
                            </span>
                            {template.tags.map(tag => (
                                <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            {template.description}
                        </p>

                        <div className="space-y-4 border-t pt-6">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500 flex items-center">
                                    <Download className="w-4 h-4 mr-2" /> 下载量
                                </span>
                                <span className="font-medium">{template.downloads}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500 flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" /> 上传时间
                                </span>
                                <span className="font-medium">{template.uploadDate}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500 flex items-center">
                                    <ShieldCheck className="w-4 h-4 mr-2" /> 格式
                                </span>
                                <span className="font-medium">Word / PDF</span>
                            </div>
                        </div>

                        <div className="mt-8 space-y-3">
                            <Button className="w-full h-12 text-base">
                                <Download className="w-4 h-4 mr-2" />
                                立即下载
                            </Button>
                            <Button variant="outline" className="w-full">
                                收藏模板
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateDetail;
