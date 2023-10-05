describe("Navigation", () => {
    it("should navigate to the about page", () => {
        // インデックスページからテストを開始
        cy.visit("http://localhost:3000/");

        // href 属性に "about" が含まれるリンクを探し、クリックする
        cy.get('a[href*="about"]').click();

        // 遷移した新しい url に "about" が含まれていることを確認
        cy.url().should("include", "/about");

        // 遷移した新しいページには "About page" と書かれた h1 要素が含まれていることを確認
        cy.get("h1").contains("About");
    });
});
