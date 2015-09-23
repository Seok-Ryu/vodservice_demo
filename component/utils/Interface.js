/**
 *  
 * 자바스크립트에서 Interface를 사용하기 위한 정의
 * @author sryu@castis.com 
 * @param {} name : 인터페이스의 이름
 * @param {} methods : 인터페이스가 가진 메소드
 */
var com;
if (!com) com = {};
if (!com.castis) com.castis = {};
if (com.castis.Interface) throw new Error("error");

/**
 *  
 * 인터페이스 생성자 
 * @param {} name : 인터페이스의 이름
 * @param {} methods : 인터페이스가 가진 메소드
 */
com.castis.Interface = function(name, methods) 
{
	if(arguments.length != 2) 
	{
		throw new Error("인터페이스생성자의 아규먼트 길이가 다음과 같습니다. : " + arguments.length + " 인터페이스를 생성하기 위해 필요한 인자의 수는 2 입니다.");
	}
	this.name = name;
	this.methods = [];
	for(var i = 0, len = methods.length; i < len; i++) 
	{
		if(typeof methods[i] !== 'string') 
		{
			throw new Error("인터페이스 생성자의 메소드명은 string 타입이어야 합니다.");
		}
	this.methods.push(methods[i]);
  }
};

/*최소 2개의 아규먼트.targetClass, targetInterFace
 *인터페이스가 2개이상이 될 경우를 생각하여 아규먼트를 정의안함 */
com.castis.Interface.ensureImplements = function(object) {
    if(arguments.length < 2) {
      throw new Error("Interface.ensureImplements 메서드의 아규먼트 길이가 다음과 같습니다." + arguments.length + "아규먼트의 길이는 2 보다 커야 합니다..");
    }
    //0번은 인터페이스가 적용될 클래스
    for(var i = 1, len = arguments.length; i < len; i++) {
      var ointerface = arguments[i];
      /*if(ointerface.constructor !== com.castis.Interface) {
        throw new Error("Interface.ensureImplements 메서드는 아규먼트로 두개 이상의 인테페이스 객체를 요구 합니다.");
      }*/
      for(var j = 0, methodsLen = ointerface.methods.length; j < methodsLen; j++) {
        var method = ointerface.methods[j];
        if(!object[method] || typeof object[method] !== 'function') {
          throw new Error("Interface.ensureImplements: " + ointerface.name  + " 이름으로 구현된 객체 에서 interface. Method 인 " + method + " 가 구현되어 있지 않습니다.");
        }
      }
    }
};