export class ArticlePage{

    aTag = "a"

    newArticleText = "New Article"

    titleLocator = "[placeholder='Article Title']"

    aboutArticleLocator = "[placeholder=\"What's this article about?\"]"

    descriptionLocator = "[placeholder=\"Write your article (in markdown)\"]";

    tagsLocator = "[placeholder='Enter tags']";

    buttonTag = "button"

    publishText = "Publish";

    addArticle(title, articleAbout, description, tags){

        cy.contains(this.aTag, this.newArticleText).click()

        cy.get(this.titleLocator).type(title)

        cy.get(this.aboutArticleLocator).type(articleAbout)

        cy.get(this.descriptionLocator).type(description)

        cy.get(this.tagsLocator).type(tags + "{enter}")

        cy.contains(this.buttonTag, this.publishText).click()

    }

    verifyAddArticleIsSuccessfull(){

    }

}

export const articlePage = new ArticlePage();