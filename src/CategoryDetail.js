React.render(
    <div className="component-container">
        <GlobalHeader menuContainer="menu-container" menuItems={mockMenuItems} bodyContainer="conponent-container" />
        <CategoryDetailBoard name="Category-2" desc="Category Description 2" 
            followerCount="1" likedCount="4" follower={aPerson} />
        <CategoriesCollection categoriesData={mockCategories} />
    </div>,
    document.getElementById("category-container")
);