
 // Aside Navbar
  const nav=document.querySelector(".nav"),
        navList=nav.querySelectorAll("li"),
        totalNavList=navList.length;

  for(Let i=0; i<totalNavList;i++){
      const a=navList[i].querySelector("a");
      a.addEventListener("click",function(){
          this.classList.add("active")
      })
  }








