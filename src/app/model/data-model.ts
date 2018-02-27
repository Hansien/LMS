// 数据来源
export const source = ['录入', '日期', '参数表', '公式', '数组'];

// 模板
export class Template {
    whole_name = '';
    model_list = [];
    models: { [key: string]: Model; };
}

// 模块
export class Model {
    model_id = 0;
    model_name = '';    // 模块名称
    has_table = -1;     // 该模块是否拥有列表,'1'是，'-1'否
    has_array = -1;     // 该模块是否拥有数组,'1'是,且代表有一张数据表，'-1'否
    tables: DataTable[];     // 列表内容
    arrays: DataArray[];   // 数组内容
}

// 数据表
export class DataTable {
    cell_list: { [key: string]: String; };
    rows: { [key: string]: DataRow; };
}

// 表的每一行
export class DataRow {
    cells: { [key: string]: DataCell; };
}

// 表的每一个单元格
export class DataCell {
    sn: String;
    name: String;
    source_type: String;
    source_name: String;
    source_sn: String;
    source_data: any;
    value: String;
    row: number;
    col: number;
    rowspan: number;
    colspan: number;
}



// 数组
export class DataArray {
    col = '';
    row = '';
    name = '';
    sn = '';
    source_type = 1;
    source = '';
    value = '';
    // col_list : cell[];
    // rows: row[];
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}


// 创建测试单元格
export const cell_1_1 = new DataCell();
cell_1_1.sn = 'c.1.1';
cell_1_1.row = 1;
cell_1_1.col = 1;
cell_1_1.name = '标准溶液名称';
cell_1_1.value = '1000mg/L钾（K）标准溶液';
cell_1_1.source_type = '1';
cell_1_1.source_name = '录入';
cell_1_1.source_data = '';
cell_1_1.source_sn = '';
cell_1_1.rowspan = 5;
cell_1_1.colspan = 1;

export const cell_1_2 = new DataCell();
cell_1_2.sn = 'c.1.2';
cell_1_2.row = 1;
cell_1_2.col = 2;
cell_1_2.name = '浓度';
cell_1_2.value = '1000';
cell_1_2.source_type = '2';
cell_1_2.source_name = '引用';
cell_1_2.source_data = '';
cell_1_2.source_sn = '';
cell_1_2.rowspan = 3;
cell_1_2.colspan = 1;

export const cell_1_3 = new DataCell();
cell_1_3.sn = 'c.1.3';
cell_1_3.row = 1;
cell_1_3.col = 3;
cell_1_3.name = '单位';
cell_1_3.value = 'mg/L';
cell_1_3.source_type = '1';
cell_1_3.source_name = '录入';
cell_1_3.source_data = '';
cell_1_3.source_sn = '';
cell_1_3.rowspan = 2;
cell_1_3.colspan = 1;

export const cell_2_1 = new DataCell();
cell_2_1.sn = 'c.2.1';
cell_2_1.row = 2;
cell_2_1.col = 1;
cell_2_1.name = '配置方法';
cell_2_1.value = '1.907g氯化钾（KCl，高纯，105℃烘2h）溶于水，加5mL浓盐酸，稀释定容至1L，得1000mg/L钾（K）标准溶液。';
cell_2_1.source_type = '1';
cell_2_1.source_name = '录入';
cell_2_1.source_data = '';
cell_2_1.source_sn = '';
cell_2_1.rowspan = 10;
cell_2_1.colspan = 1;

export const cell_3_1 = new DataCell();
cell_3_1.sn = 'c.3.1';
cell_3_1.row = 3;
cell_3_1.col = 1;
cell_3_1.name = '温度(℃)';
cell_3_1.value = '24';
cell_3_1.source_type = '1';
cell_3_1.source_name = '录入';
cell_3_1.source_data = '';
cell_3_1.source_sn = '';
cell_3_1.rowspan = 3;
cell_3_1.colspan = 1;

export const cell_3_2 = new DataCell();
cell_3_2.sn = 'c.3.2';
cell_3_2.row = 3;
cell_3_2.col = 2;
cell_3_2.name = '天平';
cell_3_2.value = 'BS210S';
cell_3_2.source_type = '3';
cell_3_2.source_name = '参数表';
cell_3_2.source_data = ['PL2002', 'JA5003', 'BS210S', 'AL204'];
cell_3_2.source_sn = '{电子天平#型号}';
cell_3_2.rowspan = 3;
cell_3_2.colspan = 1;

export const cell_3_3 = new DataCell();
cell_3_3.sn = 'c.3.3';
cell_3_3.row = 3;
cell_3_3.col = 3;
cell_3_3.name = '称量模式';
cell_3_3.value = '二次称重';
cell_3_3.source_type = '1';
cell_3_3.source_name = '录入';
cell_3_3.source_data = '';
cell_3_3.source_sn = '';
cell_3_3.rowspan = 4;
cell_3_2.colspan = 1;

export const cell_4_1 = new DataCell();
cell_4_1.sn = 'c.4.1';
cell_4_1.row = 4;
cell_4_1.col = 1;
cell_4_1.name = '溶质';
cell_4_1.value = '氯化钾';
cell_4_1.source_type = '3';
cell_4_1.source_name = '参数表';
cell_4_1.source_data = ['无水碳酸钠', '邻苯二甲酸氢钾', '氢氧化钠', '重铬酸钾', '氯化钾'];
cell_4_1.source_sn = '{标准化学物质#名称}';
cell_4_1.rowspan = 5;
cell_4_1.colspan = 1;

export const cell_4_2 = new DataCell();
cell_4_2.sn = 'c.4.2';
cell_4_2.row = 4;
cell_4_2.col = 2;
cell_4_2.name = '分子式';
cell_4_2.value = 'KCl';
cell_4_2.source_type = '3';
cell_4_2.source_name = '参数表';
cell_4_2.source_data = ['KCl'];
cell_4_2.source_sn = '{标准化学物质#名称.氯化钾#分子式}';
cell_4_2.rowspan = 5;
cell_4_2.colspan = 1;

export const cell_5_1 = new DataCell();
cell_5_1.sn = 'c.5.1';
cell_5_1.row = 5;
cell_5_1.col = 1;
cell_5_1.name = '浓度';
cell_5_1.value = '二次称重';
cell_5_1.source_type = '3';
cell_5_1.source_name = '参数表';
cell_5_1.source_data = ['≥99.95%'];
cell_5_1.source_sn = '{标准化学物质#名称.氯化钾#纯度}';
cell_5_1.rowspan = 5;
cell_5_1.colspan = 1;

export const cell_5_2 = new DataCell();
cell_5_2.sn = 'c.5.2';
cell_5_2.row = 5;
cell_5_2.col = 2;
cell_5_2.name = '称量(g)';
cell_5_2.value = '1.907';
cell_5_2.source_type = '1';
cell_5_2.source_name = '录入';
cell_5_2.source_data = '';
cell_5_2.source_sn = '';
cell_5_2.rowspan = 5;
cell_5_2.colspan = 1;

export const cell_6_1 = new DataCell();
cell_6_1.sn = 'c.6.1';
cell_6_1.row = 6;
cell_6_1.col = 1;
cell_6_1.name = '定容容器(ml)';
cell_6_1.value = '1000';
cell_6_1.source_type = '3';
cell_6_1.source_name = '参数表';
cell_6_1.source_data = ['1', '2', '5', '10', '25', '50', '100', '250', '1000'];
cell_6_1.source_sn = '{容量瓶#标称容量}';
cell_6_1.rowspan = 5;
cell_6_1.colspan = 1;

export const cell_6_2 = new DataCell();
cell_6_2.sn = 'c.6.2';
cell_6_2.row = 6;
cell_6_2.col = 2;
cell_6_2.name = '标准物质';
cell_6_2.value = 'K';
cell_6_2.source_type = '3';
cell_6_2.source_name = '参数表';
cell_6_2.source_data = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'Fe'];
cell_6_2.source_sn = '{Book1#符号}';
cell_6_2.rowspan = 5;
cell_6_2.colspan = 1;

export const cell_7_1 = new DataCell();
cell_7_1.sn = 'c.7.1';
cell_7_1.row = 7;
cell_7_1.col = 1;
cell_7_1.name = '浓度(mg/L)';
cell_7_1.value = '1000';
cell_7_1.source_type = '4';
cell_7_1.source_name = '公式';
cell_7_1.source_data = '';
cell_7_1.source_sn = '';
cell_7_1.rowspan = 5;
cell_7_1.colspan = 1;

export const cell_8_1 = new DataCell();
cell_8_1.sn = 'c.8.1';
cell_8_1.row = 8;
cell_8_1.col = 1;
cell_8_1.name = '配置日期';
cell_8_1.value = '2015-10-10';
cell_8_1.source_type = '1';
cell_8_1.source_name = '录入';
cell_8_1.source_data = '';
cell_8_1.source_sn = '';
cell_8_1.rowspan = 4;
cell_8_1.colspan = 1;

export const cell_8_2 = new DataCell();
cell_8_2.sn = 'c.8.2';
cell_8_2.row = 8;
cell_8_2.col = 2;
cell_8_2.name = '有效期限';
cell_8_2.value = '2016-1-10';
cell_8_2.source_type = '1';
cell_8_2.source_name = '录入';
cell_8_2.source_data = '';
cell_8_2.source_sn = '';
cell_8_2.rowspan = 4;
cell_8_2.colspan = 1;

export const cell_8_3 = new DataCell();
cell_8_3.sn = 'c.8.3';
cell_8_3.row = 8;
cell_8_3.col = 3;
cell_8_3.name = '配置人';
cell_8_3.value = 'xxx';
cell_8_3.source_type = '1';
cell_8_3.source_name = '录入';
cell_8_3.source_data = '';
cell_8_3.source_sn = '';
cell_8_3.rowspan = 2;
cell_8_3.colspan = 1;

export const row_1 = new DataRow();
row_1.cells = { 'c.1.1': cell_1_1, 'c.1.2': cell_1_2, 'c.1.3': cell_1_3 };
export const row_2 = new DataRow();
row_2.cells = { 'c.2.1': cell_2_1 };
export const row_3 = new DataRow();
row_3.cells = { 'c.3.1': cell_3_1, 'c.3.2': cell_3_2, 'c.3.3': cell_3_3 };
export const row_4 = new DataRow();
row_4.cells = { 'c.4.1': cell_4_1, 'c.4.2': cell_4_2 };
export const row_5 = new DataRow();
row_5.cells = { 'c.5.1': cell_5_1, 'c.5.2': cell_5_2 };
export const row_6 = new DataRow();
row_6.cells = { 'c.6.1': cell_6_1, 'c.6.2': cell_6_2 };
export const row_7 = new DataRow();
row_7.cells = { 'c.7.1': cell_7_1 };
export const row_8 = new DataRow();
row_8.cells = { 'c.8.1': cell_8_1, 'c.8.2': cell_8_2, 'c.8.3': cell_8_3 };

export const table_1 = new DataTable();
table_1.cell_list = { 'c.1.1': '标准溶液名称' };
// tslint:disable-next-line:max-line-length
table_1.rows = { 'row.1': row_1, 'row.2': row_2, 'row.3': row_3, 'row.4': row_4, 'row.5': row_5, 'row.6': row_6, 'row.7': row_7, 'row.8': row_8 };


// 模块中的列表
export const model_test = new Model();
model_test.model_id = 1;
model_test.model_name = 'model.1';
model_test.has_array = 1;
model_test.has_table = 1;
model_test.tables = [table_1];

export const models_test: Model[] = [
    model_test,
];

// export const model_test: Model[] = [
//     {
//         model_id: 1,
//         model_name: 'model1',
//         has_table: 1,
//         has_array: 1,
//         tables: [
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '一、试剂准备', value: '', source_type: 1, source: '录入' },
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '硫酸：', value: '（H2SO4，密度1.84g/ml，分析纯）。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '高氯酸：', value: '（HClO4,70%,分析纯）。', source_type: 1, source: '录入' },
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '6mol/L盐酸：', value: '浓盐酸（HCl,分析纯）与水按1：1体积混合。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },

//         ],
//         // array_list : [
//         //     'array1',
//         // ],
//         arrays: [
//             { row: '1', col: 'A', name: 'A1', sn: '001', source_type: 1, source: '引用', value: '无水碳酸钠' },
//             { row: '1', col: 'B', name: 'B1', sn: '002', source_type: 1, source: '引用', value: 'H' },
//             { row: '2', col: 'A', name: 'A2', sn: '003', source_type: 1, source: '引用', value: '邻苯二甲酸氢钾' },
//             { row: '2', col: 'B', name: 'B2', sn: '004', source_type: 1, source: '引用', value: 'He' },
//             { row: '3', col: 'A', name: 'A3', sn: '005', source_type: 1, source: '引用', value: '氢氧化钠', },
//             { row: '3', col: 'B', name: 'B3', sn: '006', source_type: 1, source: '引用', value: 'Li', },
//             { row: '4', col: 'A', name: 'A4', sn: '007', source_type: 1, source: '引用', value: '重铬酸钾', },
//         ]

//     },
//     {
//         model_id: 2,
//         model_name: 'model2',
//         has_table: 1,
//         has_array: 1,
//         tables: [
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '2,4-二硝基酚或（2,6-二硝基酚）指示剂：', value: '溶解0.20g2,4-二硝基酚于100mL水中。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
//     {
//         model_id: 3,
//         model_name: 'model3',
//         has_table: 0,
//         has_array: 0,
//         tables: [
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 3, name: '钼锑储存液：', value: '153ml浓硫酸（H2SO4，密度1.84g/ml，分析纯），缓缓的倒入400ml水中，搅拌，冷却另取10g钼酸铵溶液[(NH4)6Mo7O24•4H2O,分析纯]，溶解于约60℃的300ml水中，冷却。然后将硫酸溶液缓缓倒入钼酸铵溶液中，再加入100ml 0.5%酒石酸锑钾（KSbOC4H4O6•1/2H2O,分析纯）溶液，最后用水稀释至1L,避光储存。此储存液含10mg/L钼酸铵与2.75mol/L硫酸。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
//     {
//         model_id: 4,
//         model_name: 'model4',
//         has_table: 0,
//         has_array: 0,
//         tables: [
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '钼锑抗显色剂：', value: '1.50g抗坏血酸( C6H8O6，左旋， 旋光度+210 - +220，分析纯)溶于100ml钼锑储存液中。此液需现用现配。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
// ];

// export const model_test2: Model[] = [
//     {
//         model_id: 1,
//         model_name: 'model1',
//         has_table: 1,
//         has_array: 1,
//         tables: [
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '10%碳酸钠：', value: '10g碳酸钠（Na2CO3 分析纯）溶于10ml水中。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },

//         ],
//         // array_list : [
//         //     'array1',
//         // ],
//         arrays: [
//             { row: '1', col: 'A', name: 'A1', sn: '001', source_type: 1, source: '引用', value: '无水碳酸钠' },
//             { row: '1', col: 'B', name: 'B1', sn: '002', source_type: 1, source: '引用', value: 'H' },
//             { row: '2', col: 'A', name: 'A2', sn: '003', source_type: 1, source: '引用', value: '邻苯二甲酸氢钾' },
//             { row: '2', col: 'B', name: 'B2', sn: '004', source_type: 1, source: '引用', value: 'He' },
//             { row: '3', col: 'A', name: 'A3', sn: '005', source_type: 1, source: '引用', value: '氢氧化钠', },
//             { row: '3', col: 'B', name: 'B3', sn: '006', source_type: 1, source: '引用', value: 'Li', },
//             { row: '4', col: 'A', name: 'A4', sn: '007', source_type: 1, source: '引用', value: '重铬酸钾', },
//         ]

//     },
//     {
//         model_id: 2,
//         model_name: 'model2',
//         has_table: 1,
//         has_array: 1,
//         tables: [
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '1mol/L硫酸溶液：', value: '吸取27.8ml浓硫酸（H2SO4，密度1.84g/ml，分析纯）溶于水中，定容1000ml 。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
// ];
// export const model_test3: Model[] = [
//     {
//         model_id: 1,
//         model_name: 'model1',
//         has_table: 1,
//         has_array: 1,
//         tables: [
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '一、试剂准备', value: '', source_type: 1, source: '录入' },
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '硫酸：', value: '（H2SO4，密度1.84g/ml，分析纯）。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '高氯酸：', value: '（HClO4,70%,分析纯）。', source_type: 1, source: '录入' },
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '6mol/L盐酸：', value: '浓盐酸（HCl,分析纯）与水按1：1体积混合。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },

//         ],
//         // array_list : [
//         //     'array1',
//         // ],
//         arrays: [
//             { row: '1', col: 'A', name: 'A1', sn: '001', source_type: 1, source: '引用', value: '无水碳酸钠' },
//             { row: '1', col: 'B', name: 'B1', sn: '002', source_type: 1, source: '引用', value: 'H' },
//             { row: '2', col: 'A', name: 'A2', sn: '003', source_type: 1, source: '引用', value: '邻苯二甲酸氢钾' },
//             { row: '2', col: 'B', name: 'B2', sn: '004', source_type: 1, source: '引用', value: 'He' },
//             { row: '3', col: 'A', name: 'A3', sn: '005', source_type: 1, source: '引用', value: '氢氧化钠', },
//             { row: '3', col: 'B', name: 'B3', sn: '006', source_type: 1, source: '引用', value: 'Li', },
//             { row: '4', col: 'A', name: 'A4', sn: '007', source_type: 1, source: '引用', value: '重铬酸钾', },
//         ]

//     },
//     {
//         model_id: 2,
//         model_name: 'model2',
//         has_table: 1,
//         has_array: 1,
//         tables: [
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '2,4-二硝基酚或（2,6-二硝基酚）指示剂：', value: '溶解0.20g2,4-二硝基酚于100mL水中。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
//     {
//         model_id: 3,
//         model_name: 'model3',
//         has_table: 0,
//         has_array: 0,
//         tables: [
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 3, name: '钼锑储存液：', value: '153ml浓硫酸（H2SO4，密度1.84g/ml，分析纯），缓缓的倒入400ml水中，搅拌，冷却另取10g钼酸铵溶液[(NH4)6Mo7O24•4H2O,分析纯]，溶解于约60℃的300ml水中，冷却。然后将硫酸溶液缓缓倒入钼酸铵溶液中，再加入100ml 0.5%酒石酸锑钾（KSbOC4H4O6•1/2H2O,分析纯）溶液，最后用水稀释至1L,避光储存。此储存液含10mg/L钼酸铵与2.75mol/L硫酸。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
//     {
//         model_id: 4,
//         model_name: 'model4',
//         has_table: 0,
//         has_array: 0,
//         tables: [
//             // tslint:disable-next-line:max-line-length
//             { sn: '001', row: '1', col: 'A', colspan: 10, rowspan: 1, name: '钼锑抗显色剂：', value: '1.50g抗坏血酸( C6H8O6，左旋， 旋光度+210 - +220，分析纯)溶于100ml钼锑储存液中。此液需现用现配。', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 4, rowspan: 1, name: '配置日期：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '有效期限：', value: '', source_type: 1, source: '录入' },
//             { sn: '001', row: '1', col: 'A', colspan: 3, rowspan: 1, name: '配置人：', value: '', source_type: 1, source: '录入' },
//         ],
//         arrays: [{
//             col: '',
//             row: '',
//             name: '',
//             sn: '',
//             source_type: 1,
//             source: '',
//             value: '',
//         }],
//     },
// ];
// export const template_test: Template[] = [
//     {
//         whole_name: '模板1',
//         model_list: ['model_test'],
//         models: model_test,
//     },
//     {
//         whole_name: '模板2',
//         model_list: ['model_test'],
//         models: model_test2,
//     },
//     {
//         whole_name: '模板3',
//         model_list: ['', '', ''],
//         models: model_test3,
//     }
// ];

export const template_test: Template = new Template();
template_test.whole_name = '测试模板';
template_test.model_list = ['model.1'];
template_test.models = { 'model.1': model_test };


// {name: '无水碳酸钠', weight: 1.0079, symbol: 'H'},
// {name: '邻苯二甲酸氢钾', weight: 4.0026, symbol: 'He'},
// {name: '氢氧化钠', weight: 6.941, symbol: 'Li'},
// {name: '重铬酸钾', weight: 9.0122, symbol: 'Be'},
// {name: '硫代硫酸钠', weight: 10.811, symbol: 'B'},
// {name: '无水硫代硫酸钠', weight: 12.0107, symbol: 'C'},
// {name: '硫酸亚铁', weight: 14.0067, symbol: 'N'},
// {name: '硼砂', weight: 15.9994, symbol: 'O'},
// {name: '磷酸二氢钾', weight: 18.9984, symbol: 'F'},
// {name: '氯化钾', weight: 20.1797, symbol: 'Ne'},
// {name: '氯化钾', weight: 22.9897, symbol: 'Na'},
// 记录
// export class cell {
//     row = '';
//     col = '';
//     name = '';
//     sn = '';
// }

// 行内容
// 行,在索引中指明了行列名称，能够快速定位单元格
// export class row {
//     row = 0;
//     cols: col[];
// }
// 列,在索引中指明了行列名称，能够快速定位单元格
// export class col {
//     sn = '';
//     name = '';
//     source_type = 1;
//     source: source;
//     value = '';
//     row = '';
//     col = '';
// }

// export class source {
//     source_name = '';
//     source_sn = '';
//     sourcedate = {};
// }

// export const _source = [
//     ['录入','1',''],
//     ['日期','2',''],
//     ['参数表','3',''],
//     ['公式','4',''],
//     ['数组','5','']
// ];
