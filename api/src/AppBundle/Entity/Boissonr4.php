<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Boissonr4
 *
 * @ORM\Table(name="boissonr4")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Boissonr4Repository")
 */
class Boissonr4
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
     * @ORM\Column(name="pm", type="string", length=255)
     */
    private $pm;

    /**
     * @var string
     *
     * @ORM\Column(name="gm", type="string", length=255)
     */
    private $gm;


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
     * @return Boissonr4
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
     * Set pm
     *
     * @param string $pm
     *
     * @return Boissonr4
     */
    public function setPm($pm)
    {
        $this->pm = $pm;

        return $this;
    }

    /**
     * Get pm
     *
     * @return string
     */
    public function getPm()
    {
        return $this->pm;
    }

    /**
     * Set gm
     *
     * @param string $gm
     *
     * @return Boissonr4
     */
    public function setGm($gm)
    {
        $this->gm = $gm;

        return $this;
    }

    /**
     * Get gm
     *
     * @return string
     */
    public function getGm()
    {
        return $this->gm;
    }
}

