<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Platmenumillesabords
 *
 * @ORM\Table(name="platmenumillesabords")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PlatmenumillesabordsRepository")
 */
class Platmenumillesabords
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
     * @ORM\Column(name="ingredient", type="string", length=255)
     */
    private $ingredient;

    /**
     * @var string
     *
     * @ORM\Column(name="prix", type="string", length=255)
     */
    private $prix;


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
     * @return Platmenumillesabords
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
     * Set ingredient
     *
     * @param string $ingredient
     *
     * @return Platmenumillesabords
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

    /**
     * Set prix
     *
     * @param string $prix
     *
     * @return Platmenumillesabords
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
}

