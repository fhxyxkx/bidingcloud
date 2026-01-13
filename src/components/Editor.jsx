import React, { useState, useEffect } from "react";
import { X, Save, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Editor({ template, onClose }) {
    const [content, setContent] = useState(template.content || "");

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleSave = () => {
        // In a real app, this would save to backend
        console.log("Saving content:", content);
        alert("模板已保存 (模拟)");
    };

    const handleDownload = () => {
        // Create a blob and download
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${template.title}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-background w-full max-w-4xl h-[85vh] rounded-xl shadow-2xl flex flex-col border border-border overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">{template.title}</h2>
                        <span className="text-xs text-muted-foreground">编辑模式</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={handleDownload}>
                            <Download className="w-4 h-4 mr-2" />
                            导出
                        </Button>
                        <Button size="sm" onClick={handleSave}>
                            <Save className="w-4 h-4 mr-2" />
                            保存
                        </Button>
                        <Button variant="ghost" size="icon" onClick={onClose}>
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="flex-1 p-0 overflow-hidden relative">
                    <textarea
                        className="w-full h-full p-8 resize-none focus:outline-none font-mono text-sm leading-relaxed"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        spellCheck={false}
                    />
                </div>
            </div>
        </div>
    );
}
