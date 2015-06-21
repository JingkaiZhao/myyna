var mockPageData = [
    {
      pageName: 'Temp',
      imgSrc: '../loginpage/cubet_login1.jpg'
    },
    {
      pageName: 'Temp',
      imgSrc: '../loginpage/cubet_login2.jpg'
    },
    {
      pageName: 'Temp',
      imgSrc: '../loginpage/cubet_login3.jpg'
    },
    {
      pageName: 'Temp',
      imgSrc: '../loginpage/cubet_login4.jpg'
    },
    {
      pageName: 'Temp',
      imgSrc: '../loginpage/cubet_login5.jpg'
    },
];
var mockPerson = function(pAvatar, pName) {
    return {
        avatar: pAvatar,
        name: pName
    };
};
var aPerson = mockPerson('../user_images/beautifulgorilla278.jpg', 'jeremiah woods');
var mockCategory = function() {
    return {
        carouselImgSrc: '../images/small/pin-381.png',
        carouselNavUrl: '../pin/557460a5fce885ab59fe0d7b.html',
        pinDescription: 'pin description 381',
        createDate: '1 week ago',
        pinnedBy: mockPerson(
            '../user_images/thumb/blackbutterfly700.jpg',
            'antonio alonso'
        ),
        pinnedOnto: mockPerson(
            '../boards/thumb/board-106.png',
            'Board 106'
        )
    };
};
var mockMenuItem = function(index) {
    return {
        name: "Category-" + index,
        url: "tmp"
    };
}
var mockCategories = [];
var mockMenuItems = [];
for (var i = 0; i < 15; ++i) {
    mockCategories.push(mockCategory());
    mockMenuItems.push(mockMenuItem(i));
}