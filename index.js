let obj = {
  parent() {
    const child = () => {
      console.log("parent-child", this);
    };
    child();
  },

  parent1: () => {
    function child1() {
      console.log("parent1-child1", this);
    }
    child1();
  },
};

obj.parent();
obj.parent1();
