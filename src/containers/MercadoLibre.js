import React, { Component } from 'react';
import './MercadoLibre.css';
import {
  Layout, RecommendationsProducts, Discovery,
  Collections, Categories
} from './data';

class MercadoLibre extends Component {

  render() {

    return (
      <>
        <Layout>
          <RecommendationsProducts
            products="macbook pro"
            leyend="Basado en tu última visita"
            leyendAdici="Ver historial" />

          <RecommendationsProducts
            products="bases notebok"
            leyend="Relacionado con tus visitas en computacion"
            leyendAdici="Computación Ver historial" />

          <RecommendationsProducts
            products="televisores"
            leyend="Ofertas"
            leyendAdici="Ver todas" />
          <Discovery
            leyend="Descubrí" />

          <RecommendationsProducts
            products="iphone"
            leyend="Los mejores productos te esperan"
            leyendAdici="Ver historial" />

          <RecommendationsProducts
            products="fox"
            leyend="Relacionado con tus visitas en Autos, Motos y Otros"
            leyendAdici="Ver favoritos" />

          <Discovery
            leyend="Te puede interesar" />

          <Collections />

          <Categories />

          <RecommendationsProducts
            products="iphone"
            leyend="Tu historial"
            leyendAdici="Ver historial completo" />
        </Layout>
      </>
    )
  }
}

export default MercadoLibre;