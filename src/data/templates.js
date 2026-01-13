
export const templates = [
    {
        id: 1,
        title: "建设工程施工招标文件标准版本",
        category: "construction",
        categoryLabel: "建筑工程",
        description: "适用于各类房屋建筑和市政基础设施工程施工招标",
        downloads: 1240,
        editable: true,
        tags: ["标准", "住建部", "2024版"],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        content: `# 建设工程施工招标文件

## 第一章 招标公告

### 1. 招标条件
本招标项目____(项目名称)已由____(项目审批、核准或备案机关名称)以____(批文名称及编号)批准建设，项目业主为____，建设资金来自____(资金来源)，项目出资比例为____，招标人为____。项目已具备招标条件，现对该项目的施工进行公开招标。

### 2. 项目概况与招标范围
2.1 项目概况：
- 建设地点：____
- 建设规模：____
- 计划工期：____日历天

2.2 招标范围：____

### 3. 投标人资格要求
3.1 本次招标要求投标人须具备____资质...
`
    },
    {
        id: 2,
        title: "企业IT系统采购招标文件",
        category: "it",
        categoryLabel: "IT/软件",
        description: "包含软件开发、硬件采购及系统集成相关条款",
        downloads: 856,
        editable: true,
        tags: ["软件", "系统集成", "采购"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        content: `# 企业IT系统采购招标文件

## 第一章 招标邀请

在此邀请贵公司参与____系统的招标...

## 第二章 采购需求
1. 服务器配置要求
   - CPU: ____
   - 内存: ____
   
2. 软件功能要求
   - 模块A: ____
   - 模块B: ____
`
    },
    {
        id: 3,
        title: "办公用品年度采购框架协议",
        category: "procurement",
        categoryLabel: "物资采购",
        description: "适用于企业年度办公用品集中采购",
        downloads: 2300,
        editable: false,
        tags: ["年度", "集采", "办公"],
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
        fileUrl: "/assets/office-supplies.pdf"
    },
    {
        id: 4,
        title: "物业管理服务投标文件模板",
        category: "services",
        categoryLabel: "服务类",
        description: "商业办公楼物业管理服务投标专用",
        downloads: 540,
        editable: true,
        tags: ["物业", "服务", "商业"],
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
        content: `# 物业管理服务投标文件

## 1. 投标函
致：____(招标人)

## 2. 物业服务方案
2.1 人员配置
- 项目经理：____名
- 保安人员：____名

2.2 服务标准
...
`
    },
    {
        id: 5,
        title: "医疗设备采购标书",
        category: "procurement",
        categoryLabel: "物资采购",
        description: "包含大型医疗设备采购参数模板",
        downloads: 320,
        editable: true,
        tags: ["医疗", "设备", "参数"],
        image: "https://images.unsplash.com/photo-1516549655169-df83a0926e46?q=80&w=2070&auto=format&fit=crop",
        content: `# 医疗设备采购

设备名称：核磁共振成像系统
数量：1台

## 技术参数
1. 磁体类型：____
2. 场强：____
`
    },
    {
        id: 6,
        title: "园林绿化工程施工招标",
        category: "construction",
        categoryLabel: "建筑工程",
        description: "城市道路及公园绿化工程适用",
        downloads: 410,
        editable: false,
        tags: ["绿化", "市政", "施工"],
        image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2069&auto=format&fit=crop",
        fileUrl: "/assets/landscape.pdf"
    }
];

export const categories = [
    { id: "all", label: "全部" },
    { id: "construction", label: "建筑工程" },
    { id: "it", label: "IT/软件" },
    { id: "procurement", label: "物资采购" },
    { id: "services", label: "服务类" }
];
