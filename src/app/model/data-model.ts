//模块
export class Block {
    id = 0;
    name = ''; //模块名称
    description = '';//模块说明
    fields: Field[];//记录
}
//记录
export class Field {
    //id = 0;
    name = '';//标题名
    source = '';//数据来源
    // position = 0;//所在行
    //是否隐藏
    //是否属于不确定度
    //宽度
}
export const block_test: Block[] = [
    {
        id: 1,
        name: '模块一',
        description : 'note1',
        fields: [
            {name: '记录1', source: '录入'},
            {name: '记录2', source: '参数表'},
        ]
    },
    {
        id: 2,
        name: '模块二',
        description : 'note2',
        fields: [
            {name: '记录1', source: '日期'},
        ]
    },
    {
        id: 3,
        name: '模块三',
        description : 'note3',
        fields: [ ]
    },
];
//数据来源
// export const source = ['录入', '日期', '参数表', '公式', '数组'];

export class Model {
    model_name = '';    //模块名称
    has_table = -1;     //该模块是否拥有列表,"1"是，"-1"否
    has_array = -1;     //该模块是否拥有数组,"1"是,且代表有一张数据表，"-1"否
    table: Table[];     //列表内容
    array_list = [];    //数组索引
    arrays: _Array[];   //数组内容
    // a = new Object();
    // a : _Array ;
    // a['array1'] = _Array[];
}
export const model_test: Model[] = [
    {
        model_name : "model1",
        has_table : 1,
        has_array : 1,
        table: [
            {
                cell_list : [
                    {
                        row : "row1",
                        col : "col1",
                        name : "cell_name1",
                        sn :'1',
                    }
                ],
                rows : [
                    {
                        cols : [
                            {
                                sn : '1',
                                name : "name",
                                source_type : 1,
                                source : {
                                    source_name : "sname",
                                    source_sn : '1',
                                    sourcedate : {},
                                },
                                value: "111",
                                row: '1',
                                col: '1',
                            },
                            {
                                sn : '2',
                                name : "name2",
                                source_type : 1,
                                source : {
                                    source_name : "sname2",
                                    source_sn : '2',
                                    sourcedate : {},
                                },
                                value: "222",
                                row: '1',
                                col: '2',
                            },
                        ]
                    }
                ]
            },

        ],
        array_list : [
            "array1",
        ],
        arrays : [
            {
                array_col : 2,
                array_row : 2,
                col_list : [
                    {
                        row : '1',
                        col : 'A',
                        name : "name",
                        sn : "A1",
                    },
                    {
                        row : '1',
                        col : 'B',
                        name : "name",
                        sn : "B1",
                    },
                    {
                        row : '2',
                        col : 'A',
                        name : "name",
                        sn : "A2",
                    },
                    {
                        row : '2',
                        col : 'B',
                        name : "name",
                        sn : "B2",
                    },
                ],
                rows : [
                    {
                        cols : [
                            {
                                sn : '1',
                                name : "name",
                                source_type : 1,
                                source : {
                                    source_name : "sname",
                                    source_sn : '1',
                                    sourcedate : {},
                                },
                                value: "111",
                                row: '1',
                                col: '1',
                            },
                            {
                                sn : '2',
                                name : "name2",
                                source_type : 1,
                                source : {
                                    source_name : "sname2",
                                    source_sn : '2',
                                    sourcedate : {},
                                },
                                value: "222",
                                row: '1',
                                col: '2',
                            },
                            {
                                sn : '3',
                                name : "name3",
                                source_type : 1,
                                source : {
                                    source_name : "sname2",
                                    source_sn : '2',
                                    sourcedate : {},
                                },
                                value: "222",
                                row: '1',
                                col: '2',
                            },
                            {
                                sn : '4',
                                name : "name4",
                                source_type : 1,
                                source : {
                                    source_name : "sname2",
                                    source_sn : '2',
                                    sourcedate : {},
                                },
                                value: "222",
                                row: '1',
                                col: '2',
                            },
                        ]
                    }
                ]
            }
        ]
    },
]
//模块中的列表
export class Table {
    cell_list: cell[];
    rows: row[]; //行内容
}
//记录
export class cell {
    row = '';
    col = '';
    name = '';
    sn = '';
}

//行内容
//行,在索引中指明了行列名称，能够快速定位单元格
export class row {
    cols: col[];
}
//列,在索引中指明了行列名称，能够快速定位单元格
export class col {
    sn = '';
    name = '';
    source_type = 1;
    source: source;
    value = '';
    row = '';
    col = '';
}
export class source {
    source_name = '';
    source_sn = '';
    sourcedate = {};
}
export class _Array {
    array_col = 1;
    array_row = 1;
    col_list : cell[];
    rows: row[];
}