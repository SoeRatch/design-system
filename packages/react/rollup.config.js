import TS from 'rollup-plugin-typescript2'

export default {

    input :[
        'src/index.ts',
        'src/atoms/Color/index.ts'
    ],

    output:{
        dir:'lib',
        format: 'esm',
        sourcemap:true
    },

    plugins:[TS()],

    preserveModules:true,

    external:['react']

}