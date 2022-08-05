import TS from 'rollup-plugin-typescript2'

export default {

    input :[
        'src/index.ts',
        'src/atoms/Color/index.ts',
        'src/atoms/Image/index.ts',
        'src/atoms/Margin/index.ts',
        'src/molecules/Select/index.ts'
    ],

    output:{
        dir:'lib',
        format: 'esm',
        sourcemap:true
    },

    plugins:[TS()],

    preserveModules:true,

    external:['react','@dsys.e/foundation']

}