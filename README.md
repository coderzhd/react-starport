# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



# 问题一 组件起飞

将组件首先放到container的slot中使得组件暂时脱离主体，等proxy告诉位置时再落地



# 问题二 组件落地

proxy告诉哪个组件该在组件树的哪，那么将这个组件就放到组件树的哪



# 问题三 组件起飞与落地期间

proxy暂时占据组件的位置，等落地后位置让给组件

# 问题四 组件落地后应挂载到proxy所在位置

使用createPortal(child, container)将slot中的child放回到proxy组件中

# 问题五 createPortal(child, container)时child会重新刷新的问题

# 问题六 页面产生跳变

问题描述：动画开始时，会有一帧是动画完成时的状态，随后动画正常运行

原因：动画开始时就已经渲染好最后的动画了



待解决问题

1、proxy为组件提前占好位置

2、container去到proxy占好的位置上

​    需要另一个proxyElArr对proxy组件进行存储，container才能去知道自己在哪

3、图片未加载时就进行setProxyA

解决方案：给图片设置好宽度，而不是让图片自适应
