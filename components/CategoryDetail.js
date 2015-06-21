React.render(
    React.createElement("div", {className: "component-container"}, 
        React.createElement(GlobalHeader, {menuContainer: "menu-container", menuItems: mockMenuItems, bodyContainer: "conponent-container"}), 
        React.createElement(CategoryDetailBoard, {name: "Category-2", desc: "Category Description 2", 
            followerCount: "1", likedCount: "4", follower: aPerson}), 
        React.createElement(CategoriesCollection, {categoriesData: mockCategories})
    ),
    document.getElementById("category-container")
);