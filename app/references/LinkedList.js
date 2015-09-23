

function Element() {
}

Element.prototype.prev = null; // 선행 노드 참조.
Element.prototype.next = null; // 후행 노드 참조.
Element.prototype.data = null; // 노드의 값.

function LinkedList() {
}

LinkedList.prototype.head = null; // head node.
LinkedList.prototype.tail = null; // tail node.
LinkedList.prototype.length = 0; // node들의 갯수.

// index 위치에 value를 값으로 갖는 element 추가.
LinkedList.prototype.add = function(index, value) {
	
	try {
		// index가 숫자인지 검사.
		// fasle일 경우 : 숫자, true일 경우 : 문자.
		if (isNaN(index)) { // index가 문자일 경우 exception 발생.
//		throw "index is not number.";
			throw "Err1";
		}
		
		// index가 0보다 작거나 length + 1보다 클 경우 exception.
		if (index < 0 || index > this.length + 1) {
//		throw "index out of bounds.";
			throw "Err2";
		}
	} catch(er) {
		if(er == "Err1") {
			alert("index is not number.");
		} else if(er == "Err2") {
			alert("index out of bounds.");
		}
	}

	// element 생성.
	var e = new Element();
	e.data = value;

	// 1. 최초의 추가.
	// 2. 0번째 노드에 추가.
	// 3. 마지막 노드에 추가.
	// 4. 중간 노드에 추가.
	if (index == 0) { // 0번째 노드에 element를 추가할 경우.
		if (this.length == 0) { // 최초의 추가일 경우.
			this.head = e;
			this.tail = e;
		} else { // 노드들이 존재하는데 0번째 노드에 추가일 경우.
			e.prev = null;
			e.next = this.head;
			e.next.prev = e;
			this.head = e;
		}
	} else if (index == this.length) { // 마지막 노드에 element를 추가하는 경우.
		e.prev = this.tail;
		e.prev.next = e;
		e.next = null;
		this.tail = e;
	} else { // 중간 노드에 element를 추가하는 경우.
		// 현재 추가할 위치의 노드를 탐색.
		var target = this.getElement(index);

		// 앞뒤 노드의 참조를 현재 추가한 노드로 갱신.
		e.prev = target.prev;
		e.next = target;
		target.prev.next = e;
		target.prev = e;
	}

	this.length++; // 노드 갯수 증가.
};
LinkedList.prototype.addLast = function(value){
	this.add(this.length, value);
};
// index 위치에 있는 element 삭제 및 element 값 반환.
LinkedList.prototype.remove = function(index) {
	try {
		// index가 숫자인지 검사.
		// fasle일 경우 : 숫자, true일 경우 : 문자.
		if (isNaN(index)) { // index가 문자일 경우 exception 발생.
//		throw "index is not number.";
			throw "Err1";
		}
		
		// index가 0보다 작거나 length + 1보다 클 경우 exception.
		if (index < 0 || index > this.length + 1) {
//		throw "index out of bounds.";
			throw "Err2";
		}
	} catch(er) {
		if(er == "Err1") {
			alert("index is not number.");
		} else if(er == "Err2") {
			alert("index out of bounds.");
		}
	}
	
	// 삭제할 노드 탐색.
	var e = this.getElement(index);
	if(this.length == 1) { // 1개의 노드만 존재하는데 해당 element를 삭제하는 경우.
		this.head = null;
		this.tail = null;
	} else if(index == 0) { // 0번째 노드의 element를 삭제하는 경우.
		this.head = e.next;
		e.next.prev = null;
	} else if(index == this.length){ // 마지막 노드의 element를 삭제하는 경우.
		this.tail = e.prev;
		e.prev.next = null;
	} else { // 중간 노드의 element를 삭제하는 경우.
		e.prev.next = e.next;
		e.next.prev = e.prev;
	}
	
	this.length--; // 노드 갯수 감소.
	
	return e.data;
};
LinkedList.prototype.removelast = function() {
	return this.remove((this.length));
};
// index 위치에 있는 element 반환.
LinkedList.prototype.getElement = function(index) {
	try {
		// index가 숫자인지 검사.
		// fasle일 경우 : 숫자, true일 경우 : 문자.
		if (isNaN(index)) { // index가 문자일 경우 exception 발생.
//		throw "index is not number.";
			throw "Err1";
		}
		
		// index가 0보다 작거나 length + 1보다 클 경우 exception.
		if (index < 0 || index > this.length + 1) {
//		throw "index out of bounds.";
			throw "Err2";
		}
	} catch(er) {
		if(er == "Err1") {
			alert("index is not number.");
		} else if(er == "Err2") {
			alert("index out of bounds.");
		}
	}
	
	// 현재 검색할 위치의 노드를 탐색.
	if (index > this.length - index) { // 후위 검색.
		// 현재 검색할 위치의 노드를 탐색.
		var target = this.tail;
		for ( var i = this.length - 2; i >= index; i--) {
			target = target.prev;
		}
		return target;
		
	} else { // 전위 검색.
		// 현재 검색할 위치의 노드를 탐색.
		var target = this.head;
		for ( var i = 1; i <= index; i++) {
			target = target.next;
		}
		return target;
	}
};
LinkedList.prototype.getLastElement = function(){
	return this.getElement(this.length);
};
// index 위치에 있는 element 값 반환.
LinkedList.prototype.getData = function(index) {
	
	
	var target = this.getElement(index);
	
	return target.data;
};
