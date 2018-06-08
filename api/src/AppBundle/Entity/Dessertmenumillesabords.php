<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Dessertmenumillesabords
 *
 * @ORM\Table(name="dessertmenumillesabords")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\DessertmenumillesabordsRepository")
 */
class Dessertmenumillesabords
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="prix", type="string", length=255)
     */
    private $prix;

    /**
     * @var string
     *
     * @ORM\Column(name="ingredient", type="string", length=255)
     */
    private $ingredient;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nom
     *
     * @param string $nom
     *
     * @return Dessertmenumillesabords
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set prix
     *
     * @param string $prix
     *
     * @return Dessertmenumillesabords
     */
    public function setPrix($prix)
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get prix
     *
     * @return string
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set ingredient
     *
     * @param string $ingredient
     *
     * @return Dessertmenumillesabords
     */
    public function setIngredient($ingredient)
    {
        $this->ingredient = $ingredient;

        return $this;
    }

    /**
     * Get ingredient
     *
     * @return string
     */
    public function getIngredient()
    {
        return $this->ingredient;
    }
}

