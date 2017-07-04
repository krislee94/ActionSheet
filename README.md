###安卓和ios实现ActionSheet

![android效果图](https://github.com/krislee94/ActionSheet/blob/master/AA8130F512365DC73940EE7B53A7BC9E.png)

在项目里用到react-native-image-picker。但是这个控件有自己的好处，也有不方便的地方，比如在选择相册的时候，无法实现图片的多选。在项目优化的时候，我放弃了这个组件，取而代之的是**react-native-image-crop-picker。**
这个组件可以实现打开相机和选择相册的方法。但是前提是，这样的modal需要自己去做，看了一下，网上很多都不是太好看，因此放弃了使用，自己来画。
类似上面这样的效果图。
只是我单独封装出来了。让ios和安卓实现一样的效果，

####在这里，有一些属性。

| 属性        | 类型           | 默认值  |  备注 |
| ------------- |:-------------:| -----:|---------|
| actionvisible | string        |     |用于显示或隐藏 |     
| text1         | string        | 拍照|    |
| text2     	   | string        | 选择相册 |    |
| text3 		   | string        |  取消   |   |

####同样这里也有方法


| 方法        | 类型           | 默认值  |  备注 |
| ------------- |:-------------:| -----:|---------|
| hideModal | function        |     |隐藏modal |     
| functiontext1         | function        | |   文本1方法 |
| functiontext2     	   | function        |  |  文本2方法  |
| closeAction 		   | function        |     |  文本3方法 |

####example
```js
<ActionModal 
	actionvisible={this.state.acitonvisible}
	hideModal={()=>{this.setState(actionvisible:false,)}}
	functiontext1={()=>{alert("function1")}}
	functiontext2={()=>{alert("function2")}}
	closeAction={()=>{alert("function3")}} //通常用于取消
/>
```

这样就可以实现安卓和ios同样的效果。






