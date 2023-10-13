import GameControl from "./Main"

const {regClass, property} = Laya;

@regClass()
export default class MainRT extends Laya.Scene {
	/**设置单例的引用方式，方便其他类引用 */
	static instance: MainRT;
	/**当前游戏积分字段 */
	private _score: number;
	/**游戏控制脚本引用，避免每次获取组件带来不必要的性能开销 */
	private _control: GameControl;
	
	constructor() {
		super();
		MainRT.instance = this;
	}
	
	onEnable(): void {
		this._control = this.getComponent(GameControl);
	}
	
	
	stopGame(): void {
		this._control.stopGame();
	}
}
