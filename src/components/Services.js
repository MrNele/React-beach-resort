import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Just because a cocktail is alcohol-free doesn't mean it can't be fun and delicious. These tasty alcohol-free mocktails bring all of the fun without the booze; they taste great, and they're perfect for parties and other occasions when you want to feel festive. Whether you're the designated driver, you're having a party and don't want to over serve, you're under-aged, or alcohol isn't your thing, these alcohol-free cocktails are certain to please.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Hiking is the preferred term in Canada and the United States; the term -walking is used in these regions for shorter, particularly urban walks. It is a popular activity with numerous hiking organizations worldwide, and studies suggest that all forms of walking have health benefits.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "You have the opportunity to get free transportation by luxury vehicle from a airport to us and back",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea. Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize(corn), and rice are also used. Most modern beer is brewed with hops, which add bitterness and other flavours and act as a natural preservative and stabilizing agent. Other flavouring agents such as gruit, herbs, or fruits may be included or used instead of hops. In our resort you can order the best and strongest beers from around the world!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
