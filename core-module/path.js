const path = require('path')

// console.log(__dirname)
// console.log(__filename)

// 1 获取路径中的基础名称，可能是文件名称或者目录
/**
 * 01 返回的就是接收路径中的最后一部分
 * 02 第二个参数表示扩展名，如果说没有设置则返回完整的文件名带后缀
 * 03 第二个参数作为后缀时，如果在当前路径中没有被匹配到，则忽略
 * 04 如果结尾处有路径分隔符，也会被忽略
*/
// console.log(path.basename(__filename))
// console.log(path.basename(__filename, '.js'))
// console.log(path.basename(__filename, '.css'))
// console.log(path.basename('/a/b/c'))
// console.log(path.basename('/a/b/c/'))


// 2 获取路径目录名（路径）
/**
 * 返回路径中最后一个部分的上层目录所在路径
 * 如果结尾处有路径分隔符，会被忽略
*/
// console.log(path.dirname(__filename))
// console.log(path.dirname('/a/b/c'))
// console.log(path.dirname('/a/b/c/'))


// 3 获取路径的扩展名
/**
 * 如果路径中存在多个点，匹配的是最后一个点到结尾的内容
*/
// console.log(path.extname(__filename))
// console.log(path.extname('/a/b'))
// console.log(path.extname('/a/b/index.html.css.js'))
// console.log(path.extname('/a/b/index.html.css.js.'))

// 4 解析路径
/**
 * 接收一个路径，返回一个对象，包含不同的信息
 * root dir base ext name
*/
// const obj1 = path.parse(__filename)
// const obj2 = path.parse('/a/b/c/index.js')
// const obj3 = path.parse('/a/b/c')
// const obj4 = path.parse('/a/b/c/')
// const obj5 = path.parse('./a/b/c/')
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)
// console.log(obj5)


// 5 序列化路径
// const obj = path.parse('./a/b/c/')
// console.log(path.format(obj))


// 6 判断当前路径是否为绝对路径
// console.log(path.isAbsolute('foo'))
// console.log(path.isAbsolute('/foo'))
// console.log(path.isAbsolute('//foo'))
// console.log(path.isAbsolute('f://foo'))
// console.log(path.isAbsolute(''))
// console.log(path.isAbsolute('.'))


// 7 拼接路径
// console.log(path.join('a/b', 'c', 'index.js'))
// console.log(path.join('/a/b', 'c', 'index.js'))
// console.log(path.join('/a/b', 'c', '../', 'index.js'))
// console.log(path.join('/a/b', 'c', './', 'index.js'))
// console.log(path.join('/a/b', 'c', '', 'index.js'))
// console.log(path.join(''))


// 8 规范化路径
// console.log(path.normalize(''))
// console.log(path.normalize('a/b/c/d'))
// console.log(path.normalize('a/b/c/'))
// console.log(path.normalize('a///b/c../d'))
// console.log(path.normalize('a///b/c/../d'))
// console.log(path.normalize('a///\\b/c\\/d'))
// console.log(path.normalize('a///\b/c\\/d'))


// 9 绝对路径
/**
 * resolve([from], to)
 * from是可选的，通过to是否为绝对路径进行计算
 * 如果to是绝对路径，则忽略from，如果不是，则与from共同计算出绝对路径
*/
// console.log(path.resolve())
// console.log(path.resolve('/a', 'b'))
// console.log(path.resolve('/a', '/b'))
// console.log(path.resolve('a', '/b'))
// console.log(path.resolve('a', 'b'))
// console.log(path.resolve('a', '../b'))
// console.log(path.resolve('../b'))
console.log(path.resolve(__dirname, 'b.html'))
console.log(path.resolve('b.html')) // 当前的工作目录+文件名，这个与当前的执行目录不同