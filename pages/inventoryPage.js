//pages/inventoryPage.js
class InventoryPage {
    constructor(page) {
      this.page = page;
      this.inventoryContainer = '.inventory_list';
      this.burgerMenuButton = '#react-burger-menu-btn';
      this.logoutLink = '#logout_sidebar_link';
      this.shoppingCartBadge = '.shopping_cart_badge';
      this.inventoryItemName = '.inventory_item_name';
      this.sortDropdown = '[data-test="product_sort_container"]';
    }
  
    async verifyOnInventoryPage() {
      await this.page.waitForSelector(this.inventoryContainer);
    }
  
    async addItemToCart(itemName) {
      //itemName should match the text of an item. 
      //ex., "Sauce Labs Backpack"
      const itemLocator = this.page.locator(`.inventory_item:has-text("${itemName}") button`);
      await itemLocator.click();
    }
  
    async removeItemFromCart(itemName) {
      const itemLocator = this.page.locator(`.inventory_item:has-text("${itemName}") button`);
      await itemLocator.click();
    }
  
    async getCartCount() {
      if (await this.page.isVisible(this.shoppingCartBadge)) {
        return await this.page.innerText(this.shoppingCartBadge);
      }
      return '0';
    }
  
    async openMenu() {
      await this.page.click(this.burgerMenuButton);
    }
  
    async logout() {
      await this.page.click(this.logoutLink);
    }
  
    async sortProducts(optionText) {
      await this.page.selectOption(this.sortDropdown, { label: optionText });
    }
  
    async openItemDetails(itemName) {
      await this.page.click(`.inventory_item_name:has-text("${itemName}")`);
    }
  }
  
  module.exports = { InventoryPage };
  