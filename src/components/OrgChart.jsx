import React from 'react';

const OrgChart = () => {
    return (
        <div className="w-full overflow-x-auto py-8">
            <div className="min-w-[800px] flex flex-col items-center">
                {/* Level 1: Project Manager */}
                <div className="relative mb-12">
                    <div className="bg-white border-2 border-primary/20 shadow-md rounded-lg px-6 py-3 text-center min-w-[160px] relative z-10">
                        <div className="font-bold text-lg text-slate-800">项目经理</div>
                    </div>
                    {/* Vertical line down */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
                </div>

                {/* Level 2: Tech Leader, Deputy, Others */}
                <div className="relative flex justify-center gap-12 mb-12">
                    {/* Horizontal connector line for Level 2 */}
                    <div className="absolute -top-4 left-24 right-24 h-4 border-t-2 border-slate-300 rounded-t-xl"></div>

                    {/* Tech Leader Node */}
                    <div className="relative flex flex-col items-center">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 h-4 w-0.5 bg-slate-300"></div>
                        <div className="bg-white border border-slate-200 shadow-sm rounded-lg px-5 py-2.5 text-center min-w-[140px] z-10">
                            <div className="font-semibold text-slate-700">项目技术负责人</div>
                        </div>
                        {/* Line down to Level 3 (Left branch) */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
                    </div>

                    {/* Deputy Manager Node */}
                    <div className="relative flex flex-col items-center">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 h-4 w-0.5 bg-slate-300"></div>
                        <div className="bg-white border border-slate-200 shadow-sm rounded-lg px-5 py-2.5 text-center min-w-[140px] z-10">
                            <div className="font-semibold text-slate-700">项目副经理</div>
                        </div>
                        {/* Line down to Level 3 (Center branch) */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
                    </div>

                    {/* Other Departments Node */}
                    <div className="relative flex flex-col items-center">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 h-4 w-0.5 bg-slate-300"></div>
                        <div className="bg-white border border-slate-200 shadow-sm rounded-lg px-5 py-2.5 text-center min-w-[140px] z-10">
                            <div className="font-semibold text-slate-700">其他部门</div>
                        </div>
                    </div>
                </div>

                {/* Level 3: The children of Level 2 nodes. 
                   Based on the original ASCII, Tech Leader connects to Data Clerk.
                   Deputy Manager connects to Quality, Material, Foreman, Install Foreman?
                   The ASCII lines are a bit ambiguous, but it looks like:
                   Tech Leader -> Data Clerk, Quality Inspector (Maybe?)
                   Actually, looking closely at the ASCII:
                   
                           ┌───────────────┼───────────────┐
                           │               │               │
                    ┌──────┴──────┐ ┌──────┴──────┐ ┌──────┴──────┐
                    │项目技术负责人│ │ 项目副经理  │ │   其他部门   │
                    └──────┬──────┘ └──────┬──────┘ └─────────────┘
                           │               │
                    ┌──────┴──────────────┴──────┐
                    │                            │
                ┌───┴───┐ ┌───┴───┐ ┌───┴───┐ ┌───┴───┐ ┌───┴───┐
                │资料员 │ │质检员 │ │材料员 │ │ 工长  │ │安装工长│
                └───────┘ └───────┘ └───────┘ └───────┘ └───────┘
                
                It seems Tech Leader and Deputy Manager BOTH feed into a common bus that distributes to all 5 roles.
                Or more likely, they jointly manage these roles.
                Let's simplify visual representation: put all 5 roles in a row, connected to a bus line that connects to Tech Leader and Deputy Manager.
                
                Level 3 Bus Line: Connects Tech Leader output (x) to Deputy Manager output (y) and spans all 5 children.
                Actually, the ASCII shows:
                Tech Leader  ->  |
                Deputy Manager -> |  <-- connected
                                 |
                                 --------------------------------- (Bus)
                                 |      |      |      |      |
                               Data   Qual   Mat   Fore   Inst
                */ }

                <div className="relative flex justify-center gap-4">
                    {/* The connection bus from parents */}
                    {/* We need a line crossing from Tech Lead to Deputy Manager position above these items? 
                        Actually, let's just make a wide horizontal bar above these 5 items, 
                        and have vertical lines go up to meet the vertical lines coming down from Tech Lead and Deputy.
                     */}

                    <div className="absolute -top-4 left-6 right-6 h-4 border-t-2 border-slate-300"></div>
                    {/* We need vertical connectors from the bus up to the parents. 
                        The parents (Tech Lead, Deputy) have lines coming down.
                        The bus is at -top-4. 
                        Since the parents are positioned using flex gap, it's hard to align perfectly without absolute positioning or a grid.
                        
                        Alternative Layout:
                        Parent Group: [Tech Lead] [Deputy] 
                        Child Group: [Data] [Qual] [Mat] [Fore] [Install]
                        
                        The lines in ASCII suggest Tech lead and Deputy come down to a single horizontal line.
                        And that horizontal line feeds the 5 children.
                     */}

                    {/* Draw upward lines from the bus to connect to parents */}
                    {/* This is simulated by the 'absolute top-full' lines in the parent nodes connecting to this bus.
                         We just need to ensure the bus width covers the parents effectively.
                         The parents gap is 12 (3rem). 
                         Width of parent nodes ~140px.
                     */}

                    {['资料员', '质检员', '材料员', '工长', '安装工长'].map((role, idx) => (
                        <div key={idx} className="relative flex flex-col items-center w-24">
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 h-4 w-0.5 bg-slate-300"></div>
                            <div className="bg-slate-50 border border-slate-200 rounded px-2 py-2 text-center w-full shadow-sm hover:bg-white hover:shadow-md transition-all cursor-default">
                                <div className="text-sm font-medium text-slate-600">{role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center text-xs text-slate-400 mt-8">
                项目组织架构图
            </div>
        </div>
    );
};

export default OrgChart;
